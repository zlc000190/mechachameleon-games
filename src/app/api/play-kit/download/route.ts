import { NextRequest, NextResponse } from 'next/server';

import { getPlayKitDownloadUrl, getStripeClient } from '@/shared/lib/play-kit';

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get('session_id');
    if (!sessionId) {
      return NextResponse.json({ error: 'missing session_id' }, { status: 400 });
    }

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'payment not completed' }, { status: 402 });
    }

    return NextResponse.redirect(getPlayKitDownloadUrl(), { status: 302 });
  } catch (error: any) {
    console.error('Play Kit download failed:', error);
    return NextResponse.json(
      { error: error?.message || 'download failed' },
      { status: 500 }
    );
  }
}
