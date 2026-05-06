export const steps = ['reported', 'assessed', 'in-review', 'paid-out'];

export const stepLabels = [
  'Reported',
  'Assessed',
  'In Review',
  'Paid Out',
];

export const formatStatus = (status: string) =>
  status.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());