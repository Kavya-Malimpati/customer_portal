import { bundleData } from './mockData';
import type { BundleData } from './Interface';

export const getBundleData = async (): Promise<BundleData> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(bundleData);
    }, 300);
  });
};