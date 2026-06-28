import {
  AdsenseProvider,
  AdsManager,
  AdsterraProvider,
} from '@/extensions/ads';
import { Configs, getAllConfigs } from '@/shared/models/config';

/**
 * get ads manager with configs
 */
export function getAdsManagerWithConfigs(configs: Configs) {
  const ads = new AdsManager();

  // adsense
  if (configs.adsense_code) {
    ads.addProvider(new AdsenseProvider({ adId: configs.adsense_code }));
  }

  ads.addProvider(
    new AdsterraProvider({
      popunderSrc:
        'https://pl30105397.effectivecpmnetwork.com/ce/84/f8/ce84f82fd29fa3d46d2d761c2b206312.js',
    })
  );

  return ads;
}

/**
 * global ads service
 */
let adsService: AdsManager | null = null;

/**
 * get ads service instance
 */
export async function getAdsService(configs?: Configs): Promise<AdsManager> {
  if (!configs) {
    configs = await getAllConfigs();
  }
  adsService = getAdsManagerWithConfigs(configs);

  return adsService;
}
