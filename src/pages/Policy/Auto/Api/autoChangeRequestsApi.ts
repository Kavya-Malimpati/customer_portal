import type { ChangeRequestRow } from '../../CommonViews/interfaces';

// 'Vehicle Change'              // Replace, add, or remove a vehicle
// 'Driver Update'               // Add / remove driver
// 'Coverage Adjustment'         // Increase / decrease limits or deductibles
// 'Address Change'              // Garaging address update
// 'Mileage Update'              // Annual mileage correction
// 'Usage Change'                // Personal ↔ Commute ↔ Business
// 'Policy Endorsement'          // Mid-term policy amendment
// 'Lienholder Update'           // Add / update finance company
// 'Payment Method Change'       // Billing-related changes

export const getAutoChangeRequestsApi = async (): Promise<ChangeRequestRow[]> => {
  return Promise.resolve([
    {
      requestDate: 'Apr 17, 2026',
      type: 'Vehicle Change',
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
