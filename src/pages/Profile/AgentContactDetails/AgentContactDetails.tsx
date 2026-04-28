import { useEffect, useState } from 'react';
import { fetchAgent, fetchOfficeDetails } from './AgentApi';
import type { Agent, AgentOfficeDetails } from './Interface';
import AgentContactView from './AgentContactDetailsView';

const AgentContactContainer = () => {
  const [agent, setAgent] = useState<Agent | null>(null);
  const [office, setOffice] = useState<AgentOfficeDetails | null>(null);

  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    Promise.all([fetchAgent(), fetchOfficeDetails()])
      .then(([agentData, officeData]) => {
        setAgent(agentData);
        setOffice(officeData);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDirections = () => {
    if (!office) return;
    const query = encodeURIComponent(
      `${office.addressLine1} ${office.city} ${office.state}`
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  const handleCallClaim = () => {
    if (office) window.open(`tel:${office.claimSupport.phone}`);
  };

  return (
    <AgentContactView
      agent={agent}
      office={office}
      loading={loading}
      isModalOpen={isModalOpen}
      onOpenModal={() => setIsModalOpen(true)}
      onCloseModal={() => setIsModalOpen(false)}
      onDirections={handleDirections}
      onCallClaim={handleCallClaim}
    />
  );
};

export default AgentContactContainer;