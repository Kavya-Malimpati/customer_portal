import type { ChangeRequestRow } from '../Cards/interfaces';

// 'Vehicle Change'              // Replace, add, or remove a vehicle
// 'Driver Update'               // Add / remove driver
// 'Coverage Adjustment'         // Increase / decrease limits or deductibles
// 'Address Change'              // Garaging address update
// 'Mileage Update'              // Annual mileage correction
// 'Usage Change'                // Personal ↔ Commute ↔ Business
// 'Policy Endorsement'          // Mid-term policy amendment
// 'Lienholder Update'           // Add / update finance company
// 'Payment Method Change'       // Billing-related changes

export const getChangeRequestsApi = async (): Promise<ChangeRequestRow[]> => {
  return Promise.resolve([
    {
      requestDate: 'Apr 12, 2025',
      type: 'Vehicle Change',
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
