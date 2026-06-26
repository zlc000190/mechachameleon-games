import { ReactNode } from 'react';
import Script from 'next/script';

import { AnalyticsConfigs, AnalyticsProvider } from '.';

// Google Analytics Measurement ID fallback.
// The id is read in this order:
//   1. `nextConfig.GA_MEASUREMENT_ID` (build-time override)
//   2. `process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID` (runtime env)
//   3. `process.env.GOOGLE_ANALYTICS_ID` (admin DB / legacy)
//   4. Hard-coded project default G-1SX4C6C134 (mechachameleon.games)
const FALLBACK_GA_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env.GOOGLE_ANALYTICS_ID ||
  'G-1SX4C6C134';

/**
 * Google analytics configs
 * @docs https://marketingplatform.google.com/about/analytics/
 */
export interface GoogleAnalyticsConfigs extends AnalyticsConfigs {
  gaId: string; // google analytics id
}

/**
 * Google analytics provider
 * @website https://marketingplatform.google.com/about/analytics/
 */
export class GoogleAnalyticsProvider implements AnalyticsProvider {
  readonly name = 'google-analytics';

  configs: GoogleAnalyticsConfigs;

  constructor(configs: GoogleAnalyticsConfigs) {
    this.configs = configs;
  }

  getHeadScripts(): ReactNode {
    return (
      <>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${this.configs.gaId}`}
          strategy="afterInteractive"
          async
        />
        <Script
          id={this.name}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${this.configs.gaId}', { send_page_view: true });
            `,
          }}
        />
      </>
    );
  }
}

export { FALLBACK_GA_ID };
