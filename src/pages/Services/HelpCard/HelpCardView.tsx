import './HelpCard.css';

import { useState } from 'react';
import {
  FaBaby,
  FaBriefcase,
  FaCar,
  FaGlobeAmericas,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaHouseDamage,
  FaIdBadge,
  FaPhone,
  FaRegMoneyBillAlt,
  FaShoppingCart,
  FaTools,
  FaUserAlt,
  FaUserFriends,
} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

import {
  Card,
  CardContent,
  Modal,
  TextField,
  Typography,
} from '../../../common/components';

import type { HelpCardViewProps } from './interfaces';

const HelpCardView = ({
  items,
  onSearch,
  isLifeEventsOpen = false,
  onCloseLifeEvents,
}: HelpCardViewProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const lifeEvents = [
    {
      lifeEvent: 'Marriage',
      action: 'Add spouse, update beneficiaries, change name',
      icon: <FaHeart />,
      color: 'var(--color-primary)',
    },
    {
      lifeEvent: 'Divorce/Separation',
      action: 'Remove spouse, update beneficiaries',
      icon: <FaUserFriends />,
      color: '#FF8A65',
    },
    {
      lifeEvent: 'Birth or Adoption of Child',
      action: 'Add dependent, update coverage',
      icon: <FaBaby />,
      color: '#7ED321',
    },
    {
      lifeEvent: 'Death of Policyholder',
      action: 'Start claim, update beneficiaries',
      icon: <FaRegMoneyBillAlt />,
      color: '#9E9E9E',
    },
    {
      lifeEvent: 'Change of Address',
      action: 'Update residence and mailing address',
      icon: <FaHome />,
      color: '#4FC3F7',
    },
    {
      lifeEvent: 'Change of Phone/Email',
      action: 'Update contact details',
      icon: <FaPhone />,
      color: '#FFD54F',
    },
    {
      lifeEvent: 'Name Change',
      action: 'Upload supporting documents and update records',
      icon: <FaIdBadge />,
      color: '#BA68C8',
    },
    {
      lifeEvent: 'New Vehicle Purchase',
      action: 'Add vehicle to auto policy',
      icon: <FaShoppingCart />,
      color: '#4DB6AC',
    },
    {
      lifeEvent: 'Vehicle Sold/Transferred',
      action: 'Remove vehicle from policy',
      icon: <FaCar />,
      color: '#F06292',
    },
    {
      lifeEvent: 'Home Purchase',
      action: 'Add property coverage',
      icon: <FaHouseDamage />,
      color: '#4FC3F7',
    },
    {
      lifeEvent: 'Home Sale',
      action: 'Remove property coverage',
      icon: <FaHome />,
      color: '#90CAF9',
    },
    {
      lifeEvent: 'Home Renovation',
      action: 'Update dwelling value and coverage limits',
      icon: <FaTools />,
      color: '#AED581',
    },
    {
      lifeEvent: 'Retirement',
      action: 'Review life, health, and retirement-related coverage',
      icon: <FaRegMoneyBillAlt />,
      color: '#8D6E63',
    },
    {
      lifeEvent: 'New Job/Employment Change',
      action: 'Update occupation-related risk details',
      icon: <FaBriefcase />,
      color: '#F8BBD0',
    },
    {
      lifeEvent: 'Business Started/Closed',
      action: 'Modify commercial insurance coverage',
      icon: <FaBriefcase />,
      color: '#9575CD',
    },
    {
      lifeEvent: 'Adding/Removing Drivers',
      action: 'Update auto policy drivers',
      icon: <FaUserAlt />,
      color: '#4DD0E1',
    },
    {
      lifeEvent: 'College Enrollment',
      action: 'Student-away-from-home updates',
      icon: <FaGraduationCap />,
      color: '#7986CB',
    },
    {
      lifeEvent: 'International Relocation',
      action: 'Coverage review and policy adjustments',
      icon: <FaGlobeAmericas />,
      color: '#64B5F6',
    },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <>
      <div className='help-card-container' id='help-and-support'>
        <Card variant='outlined' className='help-card-wrapper'>
          <div className='help-card-header'>
            <Typography variant='h3' color='primary' className='help-card-title'>
              Help & Support
            </Typography>

            <div className='help-card-search'>
              <FiSearch className='search-icon' size={17} />
              <TextField
                type='text'
                placeholder='Search FAQs...'
                value={searchQuery}
                onChange={handleSearchChange}
                className='search-input'
                aria-label='Search FAQs'
              />
            </div>
          </div>

          <CardContent className='help-card-content'>
            <div className='help-cards-grid'>
              {items.map(item => (
                <Card
                  key={item.id}
                  onClick={item.onClick}
                  className='help-card-item'
                  aria-label={item.title}
                >
                  <div className='help-card-icon'>{item.icon}</div>
                  <Typography variant='body1' color='primary' className='help-card-item-title'>
                    {item.title}
                  </Typography>
                  <Typography variant='body2' color='muted' className='help-card-item-subtitle'>
                    {item.subtitle}
                  </Typography>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Modal
        isOpen={isLifeEventsOpen}
        onClose={onCloseLifeEvents}
        aria-label='Policy Life Events'
        title='Policy Life Events'
        maxWidth='860px'
      >
        <div className='help-life-events-modal'>
          <Typography variant='body2' color='muted'>
            Review the most common policy life events below and the updates they may require.
          </Typography>

          <div className='help-life-events-list mt-4'>
            <div className='help-life-events-table'>
              <div className='help-life-events-header'>
                <div className='help-life-events-header-cell'>Life Event</div>
                <div className='help-life-events-header-cell pl-22'>Action / Update</div>
              </div>

              <div className='help-life-events-body'>
                {lifeEvents.map(item => (
                  <div key={item.lifeEvent} className='help-life-event-row'>
                    <div className='help-life-event-cell help-life-event-main'>
                      <div
                        className='life-event-icon-circle'
                        style={{ backgroundColor: item.color }}
                        aria-hidden='true'
                      >
                        <span className='life-event-icon'>{item.icon}</span>
                      </div>
                      <div className='help-life-event-meta'>
                        <Typography
                          variant='body1'
                          color='primary'
                          className='help-life-event-title'
                        >
                          {item.lifeEvent}
                        </Typography>
                      </div>
                    </div>

                    <div className='help-life-event-cell help-life-event-action pl-20'>
                      <Typography variant='body2' color='muted'>
                        {item.action}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HelpCardView;
