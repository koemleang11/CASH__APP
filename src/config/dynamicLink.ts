import dynamicLinks from '@react-native-firebase/dynamic-links';
import {Platform} from 'react-native';
import { encryptData } from '../crypto';
export const share_url =
  Platform.OS === 'ios'
    ? 'https://sarkhengnews.page.link'
    : 'https://sarkhengapp.page.link';

export async function buildShortLink(item: any) {
  const social = {
    title: item.title?.km,
    imageUrl: item.thumbnail_url,
  };
  const link = await dynamicLinks().buildShortLink({
    link: `${share_url}/detail/` + item.id,
    domainUriPrefix: share_url,
    analytics: {
      campaign: 'banner',
    },
    social,
    android: {
      packageName: 'com.phsartech_news',
    },
    ios: {
      bundleId: 'com.sarkheng.SarKheng',
      appStoreId: '1460756313',
    },
  });
  return link;
}
