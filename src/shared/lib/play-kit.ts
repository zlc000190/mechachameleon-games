import Stripe from 'stripe';

const PLAY_KIT_PRICE_CENTS = 199;
const PLAY_KIT_COMPARE_AT_PRICE_CENTS = 700;
const PLAY_KIT_CURRENCY = 'usd';
const PLAY_KIT_DOWNLOAD_URL =
  'https://pub-df9b5ddb7c4049af9616db9a99a48adf.r2.dev/mecchachameleon.art-ass/MecchaCamouflage.exe';

export function getPlayKitPriceLabel() {
  return '$1.99';
}

export function getPlayKitCompareAtLabel() {
  return '$7';
}

export function getPlayKitOfferLabel(locale = 'en') {
  if (locale === 'zh') {
    return '7天内限时优惠';
  }

  if (locale === 'vi') {
    return 'Ưu đãi giới hạn 7 ngày';
  }

  return '7-day limited-time offer';
}

export function getPlayKitOfferNote(locale = 'en') {
  if (locale === 'zh') {
    return '限时特价，7天后恢复原价';
  }

  if (locale === 'vi') {
    return 'Giá ưu đãi, sẽ quay lại mức thường sau 7 ngày';
  }

  return 'Launch offer ends in 7 days';
}

export function getPlayKitCompareAtAmount() {
  return PLAY_KIT_COMPARE_AT_PRICE_CENTS;
}

export function getPlayKitCheckoutAmount() {
  return PLAY_KIT_PRICE_CENTS;
}

export function getPlayKitCurrency() {
  return PLAY_KIT_CURRENCY;
}

export function getStripeSecretKey() {
  return process.env.STRIPE_SECRET_KEY || '';
}

export function getStripeClient() {
  const secretKey = getStripeSecretKey();
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is required');
  }

  return new Stripe(secretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });
}

export function getAppUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || 'https://mechachameleon.games';
}

export function getPlayKitDownloadUrl() {
  return PLAY_KIT_DOWNLOAD_URL;
}
