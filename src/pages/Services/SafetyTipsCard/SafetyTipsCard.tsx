import SafetyTipsView from './SafetyTipsCardView';

import type { SafetyTip } from './interfaces';

const SafetyTipsCard = () => {
  const tips: SafetyTip[] = [
    {
      id: 1,
      title: 'Winter Driving Prep',
      description: 'Check tire pressure and emergency kits before the freeze.',
      image: '/images/winter-driving.jpg',
    },
    {
      id: 2,
      title: 'Home Maintenance',
      description: 'Clean gutters to prevent water damage from heavy rain.',
      image: '/images/home-maintenance.jpg',
    },
  ];

  return <SafetyTipsView tips={tips} />;
};

export default SafetyTipsCard;
