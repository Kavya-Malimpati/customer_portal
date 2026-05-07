import type { ChangeRequestRow } from '../../CommonViews/interfaces';

// 'Property Detail Update'      // Address, square footage, year built, etc.
// 'Coverage Adjustment'         // Dwelling, personal property, liability limits
// 'Safety Feature Update'       // Alarm, smoke detector, security system changes
// 'Occupancy Change'            // Primary ↔ Secondary ↔ Rental
// 'Roof Update'                 // Roof replacement or repair
// 'Mortgage / Lender Update'    // Add / update mortgage company
// 'Policy Endorsement'          // Mid-term policy amendment
// 'Property Value Update'       // Estimated value or replacement cost change

export const getHomeownersChangeRequestsApi = async (): Promise<ChangeRequestRow[]> => {
  return Promise.resolve([
    {
      requestDate: 'Apr 12, 2026',
      type: 'Property Detail Update',
      status: 'PENDING',
      estimatedCompletion: 'Apr 20, 2026',
    },
    {
      requestDate: 'Apr 03, 2026',
      type: 'Coverage Adjustment',
      status: 'IN_REVIEW',
      estimatedCompletion: 'Apr 05, 2026',
    },
    {
      requestDate: 'Jan 18, 2026',
      type: 'Policy Endorsement',
      status: 'COMPLETED',
      estimatedCompletion: 'Jan 19, 2026',
    },
  ]);
};
