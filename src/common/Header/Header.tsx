import './Header.css';

import { useEffect, useRef, useState } from 'react';
import { FiAlertTriangle, FiCheckSquare, FiRefreshCw } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { Button, Typography } from '../components';

type NotifType = 'info' | 'success' | 'warning';

const notificationItems: {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  type: NotifType;
  path: string;
  actionLabel: string;
}[] = [
  {
    id: 'payment-successful',
    title: 'AutoPay payment process',
    category: 'Billing',
    description:
      'Your June premium payment of $142.00 was successfully processed. Your next payment is scheduled for July 25.',
    date: 'June 28, 2026',
    type: 'success',
    path: '/billing',
    actionLabel: 'View billing details',
  },
  {
    id: 'policy-renewal-reminder',
    title: 'Policy renewal reminder',
    category: 'Policy',
    description:
      'Your homeowner policy is scheduled to renew on July 15, 2026. Review your coverage and confirm your premium.',
    date: 'June 27, 2026',
    type: 'info',
    path: '/policy',
    actionLabel: 'Review policy',
  },
  {
    id: 'claim-payment-issued',
    title: 'Claim payment issued',
    category: 'Claims',
    description:
      'A payment for your recent auto claim has been issued and will arrive in 3–5 business days.',
    date: 'June 25, 2026',
    type: 'success',
    path: '/claims',
    actionLabel: 'View claim status',
  },
  {
    id: 'safety-checklist',
    title: 'Home safety checklist ready',
    category: 'Services',
    description:
      'Complete the new risk prevention checklist to qualify for a $15 safety credit on your home premium.',
    date: 'June 24, 2026',
    type: 'info',
    path: '/services',
    actionLabel: 'Open checklist',
  },
  {
    id: 'verify-identity',
    title: 'Identity verification required',
    category: 'Security',
    description:
      'Please complete identity verification to keep your service access uninterrupted and reduce fraud risk.',
    date: 'June 23, 2026',
    type: 'warning',
    path: '/profile-page',
    actionLabel: 'Verify now',
  },
];

const getIcon = (type: NotifType) => {
  if (type === 'warning') return <FiAlertTriangle />;
  if (type === 'success') return <FiCheckSquare />;
  return <FiRefreshCw />;
};

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const panelRef = useRef<HTMLDivElement>(null);

  const unreadCount = notificationItems.length - readIds.size;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-notifications', handler);
    return () => window.removeEventListener('open-notifications', handler);
  }, []);

  const handleProfileClick = () => navigate('/profile-page');

  return (
    <header
      className='w-full bg-white shadow-sm h-16 flex items-center fixed top-0 left-0 right-0 z-50'
      style={{ borderBottom: '1px solid var(--border-color)' }}
    >
      <div className='mx-auto px-6 w-full flex items-center justify-between'>
        {/* Logo with Menu Button */}
        <div className='flex items-center gap-4'>
          <button
            onClick={onMenuClick}
            className='md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
            aria-label='Toggle menu'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <img src={logo} alt='Logo' className='h-12 w-auto' />
        </div>

        {/* Right side */}
        <div className='flex items-center gap-4 ml-auto'>
          {/* Search Bar */}
          <div className='hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2'>
            <svg
              className='w-5 h-5 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
            <input
              type='text'
              placeholder='Search...'
              className='bg-transparent ml-2 outline-none text-sm w-40'
              style={{ color: 'var(--text-primary)' }}
            />
          </div>

          {/* Notification Bell + Dropdown */}
          <div className='notif-bell-wrapper' ref={panelRef}>
            <button
              onClick={() => setOpen(prev => !prev)}
              className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
              aria-label='Notifications'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>
            {unreadCount > 0 && <span className='notif-badge'>{unreadCount}</span>}

            {open && (
              <div className='notif-panel'>
                {/* Panel Header */}
                <div className='notif-panel-header'>
                  <div className='notif-panel-title'>
                    <Typography variant='overline' color='primary' className='notif-heading'>
                      Alerts &amp; Notifications
                    </Typography>
                  </div>
                  <Button
                    variant='text'
                    color='info'
                    size='small'
                    onClick={() => setReadIds(new Set(notificationItems.map(n => n.id)))}
                  >
                    Mark all read
                  </Button>
                </div>

                {/* Notification List */}
                <div className='notif-list'>
                  {notificationItems.map(n => {
                    const isUnread = !readIds.has(n.id);
                    return (
                      <div key={n.id} className='notif-item'>
                        <span className={`notif-unread-dot${isUnread ? ' unread' : ''}`} />
                        <span className={`notif-type-icon ${n.type}`}>{getIcon(n.type)}</span>
                        <div className='notif-content'>
                          <div className='notif-content-row'>
                            <Button
                              variant='text'
                              color='inherit'
                              size='small'
                              className='notif-title-btn'
                              onClick={() => {
                                setReadIds(prev => new Set([...prev, n.id]));
                                setOpen(false);
                                navigate(n.path);
                              }}
                            >
                              {n.title}
                            </Button>
                            <Typography variant='caption' color='muted' className='notif-date'>
                              {n.date}
                            </Typography>
                          </div>
                          <Typography variant='body2' color='muted' className='notif-description'>
                            {n.description}
                          </Typography>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Panel Footer */}
                <div className='notif-panel-footer'>
                  <Button
                    variant='text'
                    color='info'
                    size='small'
                    onClick={() => {
                      setOpen(false);
                      navigate('/settings');
                    }}
                  >
                    Configure Alert Preferences ›
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <button
            onClick={handleProfileClick}
            className='w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100'
            aria-label='Profile'
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span className='text-white font-semibold text-sm'>U</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
