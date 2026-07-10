import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BundleView from './BundleView';
import BundleSuccessModal from './Components/BundleSuccessModal';

import { getBundleData } from './BundleApi';

import type { BundleData } from './Interface';

const BundlePage = () => {
  const navigate = useNavigate();

  const [bundleData, setBundleData] =
    useState<BundleData | null>(null);

  const [successOpen, setSuccessOpen] =
    useState(false);

  useEffect(() => {
    const fetchBundleData = async () => {
      const response = await getBundleData();
      setBundleData(response);
    };

    fetchBundleData();
  }, []);

  if (!bundleData) {
    return null;
  }

  return (
    <>
      <BundleView
        data={bundleData}
      onAutoPolicyClick={() =>
  navigate('/policy?tab=personalAuto')
}

onHomePolicyClick={() =>
  navigate('/policy?tab=homeowners')
}
        onGetBundleQuote={() =>
          navigate('/bundle-quote')
        }
        onBundlePolicies={() =>
          setSuccessOpen(true)
        }
      />

      <BundleSuccessModal
        isOpen={successOpen}
        onClose={() =>
          setSuccessOpen(false)
        }
      />
    </>
  );
};

export default BundlePage;