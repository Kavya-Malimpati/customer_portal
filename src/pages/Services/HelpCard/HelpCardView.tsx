import './HelpCard.css';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Card, CardContent, Typography } from '../../../common/components';

import type { HelpCardViewProps } from './interfaces';
const HelpCardView = ({ items, onSearch }: HelpCardViewProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <>

      <div className='help-card-container'>
        <Card variant='outlined' className='help-card-wrapper'>
          {/* Header */}
          <div className='help-card-header'>
            <Typography variant='h3' color='primary' className='help-card-title'>
              Help & Support
            </Typography>

            {/* Search Bar */}
            <div className='help-card-search'>
              <FiSearch className='search-icon' size={18} />
              <input
                type='text'
                placeholder='Search FAQs...'
                value={searchQuery}
                onChange={handleSearchChange}
                className='search-input'
                aria-label='Search FAQs'
              />
            </div>
          </div>

          {/* Cards Grid */}
          <CardContent className='help-card-content'>
            <div className='help-cards-grid'>
              {items.map(item => (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className='help-card-item'
                  aria-label={item.title}
                >
                  <div className='help-card-icon'>{item.icon}</div>
                  <Typography variant='body2' color='primary' className='help-card-item-title'>
                    {item.title}
                  </Typography>
                  <Typography variant='caption' color='muted' className='help-card-item-subtitle'>
                    {item.subtitle}
                  </Typography>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default HelpCardView;
