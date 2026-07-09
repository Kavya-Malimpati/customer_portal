import type { Option } from './interfaces';

export const AUTO_POLICIES: Option[] = [
  {
    label: 'AUTO-9902 — 2022 Honda Civic',
    value: 'AUTO-9902',
  },
  {
    label: 'AUTO-3310 — 2020 Toyota RAV4',
    value: 'AUTO-3310',
  },
];

export const HOME_POLICIES: Option[] = [
  // {
  //   label: 'HOME-7721 — 14 Maple St, Oakland CA',
  //   value: 'HOME-7721',
  // },
  {
    label: 'HOME-5544 — 142 Willow Creek',
    value: 'HOME-5544',
  },
];

export const AUTO_LOSS_TYPES: Option[] = [
  {
    value: 'Collision',
    label: 'Collision',
  },
  {
    value: 'Theft',
    label: 'Theft',
  },
  {
    value: 'Vandalism',
    label: 'Vandalism',
  },
  {
    value: 'Glass',
    label: 'Glass',
  },
  {
    value: 'Weather',
    label: 'Weather',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

export const HOME_LOSS_TYPES: Option[] = [
  {
    value: 'Fire',
    label: 'Fire',
  },
  {
    value: 'Water / Plumbing',
    label: 'Water / Plumbing',
  },
  {
    value: 'Storm',
    label: 'Storm',
  },
  {
    value: 'Theft / Burglary',
    label: 'Theft / Burglary',
  },
  {
    value: 'Liability',
    label: 'Liability',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];