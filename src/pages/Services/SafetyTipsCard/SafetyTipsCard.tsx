import SafetyTipsView from './SafetyTipsCardView';
import winterImage from '../../../assets/images/winter.jpg';
import homeImage from '../../../assets/images/home.jpg';

import type { SafetyTip } from './interfaces';

const SafetyTipsCard = () => {
  const tips: SafetyTip[] = [
    {
      id: 1,
      title: 'Winter Driving Prep',
      description: 'Check tire pressure and emergency kits before the freeze.',
      image: winterImage,
    },
    {
      id: 2,
      title: 'Home Maintenance',
      description: 'Clean gutters to prevent water damage from heavy rain.',
      image: homeImage,
    },
  ];

  return <SafetyTipsView tips={tips} />;
};

export default SafetyTipsCard;
