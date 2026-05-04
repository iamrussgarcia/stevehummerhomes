import { NextRequest, NextResponse } from 'next/server';

/**
 * IDX Listings API Proxy
 *
 * Proxies requests to the SimplyRETS demo API.
 * To switch to a real IDX provider, replace the SIMPLYRETS_* env vars
 * or swap the fetch URL for your provider's endpoint.
 *
 * Demo credentials (SimplyRETS): simplyrets / simplyrets
 * Docs: https://docs.simplyrets.com/api/index.html
 */

const SIMPLYRETS_BASE_URL = 'https://api.simplyrets.com/properties';
const SIMPLYRETS_USER = process.env.SIMPLYRETS_USER ?? 'simplyrets';
const SIMPLYRETS_PASS = process.env.SIMPLYRETS_PASS ?? 'simplyrets';

function buildBasicAuth(user: string, pass: string) {
  return 'Basic ' + Buffer.from(`${user}:${pass}`).toString('base64');
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Allowed filters to forward to SimplyRETS
  const allowedParams = ['limit', 'offset', 'minprice', 'maxprice', 'minbeds', 'maxbeds', 'minbaths', 'type', 'status', 'q', 'sort'];

  const upstreamParams = new URLSearchParams();
  for (const key of allowedParams) {
    const val = searchParams.get(key);
    if (val !== null) {
      upstreamParams.set(key, val);
    }
  }

  // Default limit
  if (!upstreamParams.has('limit')) {
    upstreamParams.set('limit', '12');
  }

  const upstreamUrl = `${SIMPLYRETS_BASE_URL}?${upstreamParams.toString()}`;

  try {
    const res = await fetch(upstreamUrl, {
      headers: {
        Authorization: buildBasicAuth(SIMPLYRETS_USER, SIMPLYRETS_PASS),
        Accept: 'application/json',
      },
      // Cache for 5 minutes in production, no-store in development
      next: {
        revalidate: process.env.NODE_ENV === 'production' ? 300 : 0,
      },
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[IDX API] Upstream error:', res.status, errText);
      return NextResponse.json(
        { error: 'Failed to fetch listings from IDX provider', status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Normalize response shape
    const properties = Array.isArray(data) ? data : data.listings ?? [];

    return NextResponse.json(
      {
        listings: properties,
        total: res.headers.get('x-total-count') ?? properties.length,
        source: 'simplyrets-demo',
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (err) {
    console.error('[IDX API] Network error:', err);
    return NextResponse.json(
      { error: 'IDX service unavailable. Please try again.' },
      { status: 503 }
    );
  }
}
