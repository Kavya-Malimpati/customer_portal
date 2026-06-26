import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/profile-page');
  };

  return (
    <header
      className='w-full bg-white shadow-sm h-16 flex items-center fixed top-0 left-0 right-0 z-50'
      style={{
        borderBottom: '1px solid var(--border-color)',
      }}
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

        {/* Search Bar, Notification, and Profile */}
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

          {/* Notification Icon */}
          <button
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors relative'
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
            <span
              className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'
              aria-hidden='true'
            />
          </button>

          {/* Profile Logo */}
          <button
            onClick={handleProfileClick}
            className='w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100'
            aria-label='Profile'
            style={{
              backgroundColor: 'var(--color-primary)',
            }}
          >
            <span className='text-white font-semibold text-sm'>U</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
