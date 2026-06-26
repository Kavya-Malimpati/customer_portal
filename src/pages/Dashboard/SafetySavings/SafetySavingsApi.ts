import type { SafetyTip } from './Interfaces';

export const getSafetySavingsApi = async (): Promise<SafetyTip[]> => {
  await new Promise(res => setTimeout(res, 500));

  return [
    {
      id: 1,
      title: 'Safe Driving Program',
      description:
        'Enroll now and save up to 15% on your next auto insurance renewal by maintaining good driving habits.',
      type: 'driving',
    },
    {
      id: 2,
      title: 'Home Maintenance Tip',
      description:
        'Winter is coming! Check your gutters and roof for debris to prevent ice dams and potential water damage.',
      type: 'home',
    },
  ];
};