export const timelineSteps = [
  'Reported',
  'Inspection',
  'Estimate',
  'Settlement',
];

export const statusColor = {
  Reported: 'info',
  Inspection: 'warning',
  Estimate: 'primary',
  Settlement: 'success',
};

export const getAssetLabel = (
  type: 'auto' | 'home'
) => {

  return type === 'auto'
    ? 'Vehicle'
    : 'Property';

};

export const getInspectionTitle = (
  type: 'auto' | 'home'
) => {

  return type === 'auto'
    ? 'Vehicle Inspection'
    : 'Property Inspection';

};

export const getEstimateTitle = (
  type: 'auto' | 'home'
) => {

  return type === 'auto'
    ? 'Repair Estimate'
    : 'Property Estimate';

};