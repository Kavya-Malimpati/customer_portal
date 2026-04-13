import Typography from '../components/Typography/Typography';

interface HeaderProps {
  onLogout?: () => void;
}

const Header = ({ onLogout }: HeaderProps) => {
  return (
    <header
      className='w-full bg-white shadow-sm'
      style={{
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className='max-w-7xl mx-auto px-6 py-2 flex items-center justify-between'>
        {/* Logo with "Pure" text */}
        <div className='flex items-center gap-3'>
          <img
            src='/src/assets/images/logo.png'
            alt='Pure Logo'
            className='h-15 w-auto'
          />
        </div>

        {/* Navigation placeholder */}
        <nav className='flex gap-6'>
          <Typography
            variant='body1'
            className='cursor-pointer transition-all hover:opacity-70'
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Dashboard
          </Typography>
          <Typography
            variant='body1'
            className='cursor-pointer transition-all hover:opacity-70'
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Settings
          </Typography>
          <Typography
            variant='body1'
            className='cursor-pointer transition-all hover:opacity-70'
            onClick={onLogout}
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Logout
          </Typography>
        </nav>
      </div>
    </header>
  );
};

export default Header;
