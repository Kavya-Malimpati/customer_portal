import './Dashboard.css';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import AttentionBanner from './AttentionBanner/AttentionBanner';
import BillingSummary from './BillingSummary/BillingSummary';
import DedicatedAgent from './DedicatedAgent/DedicatedAgent';
import ActiveClaim from './ActiveClaim/ActiveClaim';
import QuickActions from './QuickActions/QuickActions';
import PolicySummaryCard from './PolicySummaryCard/PolicySummaryCard';
import RecentActivity from './RecentActivity/RecentActivity';
import SafetySavings from './SafetySavings/SafetySavings';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <DashboardHeader />

      <div className='dashboard-alert'>
        <AttentionBanner />
      </div>

      <div className='dashboard-top-row'>
        <div className='dashboard-billing'>
          <BillingSummary />
        </div>

        <div className='dashboard-agent'>
          <DedicatedAgent />
        </div>
      </div>

      <div className='dashboard-second-row'>
        <div className='dashboard-active-claim'>
          <ActiveClaim />
        </div>

        <div className='dashboard-quick-actions'>
          <QuickActions />
        </div>
      </div>

      <div className='dashboard-third-row'>
        <PolicySummaryCard />
      </div>
      <div className='dashboard-fourth-row'>
        <RecentActivity />
        <SafetySavings />
      </div>
    </div>
  );
};

export default Dashboard;
