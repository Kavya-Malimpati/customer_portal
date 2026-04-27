import type { ChangeRequestRow } from '../Cards/interfaces';

// 'Property Detail Update'      // Address, square footage, year built, etc.
// 'Coverage Adjustment'         // Dwelling, personal property, liability limits
// 'Safety Feature Update'       // Alarm, smoke detector, security system changes
// 'Occupancy Change'            // Primary ↔ Secondary ↔ Rental
// 'Roof Update'                 // Roof replacement or repair
// 'Mortgage / Lender Update'    // Add / update mortgage company
// 'Policy Endorsement'          // Mid-term policy amendment
// 'Property Value Update'       // Estimated value or replacement cost change

export const getChangeRequestsApi = async (): Promise<ChangeRequestRow[]> => {
  return Promise.resolve([
    {
      requestDate: 'Apr 12, 2025',
      type: 'Property Detail Update',
      status: 'PENDING',
      estimatedCompletion: 'Apr 20, 2025',
    },
    {
      requestDate: 'Apr 03, 2025',
      type: 'Coverage Adjustment',
      status: 'IN_REVIEW',
      estimatedCompletion: 'Apr 05, 2025',
    },
    {
      requestDate: 'Aug 18, 2024',
      type: 'Policy Endorsement',
      status: 'COMPLETED',
      estimatedCompletion: 'Aug 19, 2024',
    },
  ]);
};