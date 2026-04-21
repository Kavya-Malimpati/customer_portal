import '../../styles/tokens.css';

function Footer() {
  return (
    <footer
      className='w-full py-6 border-t'
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-center'>
        <p
          className='text-sm'
          style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          © 2026 @valuemomentum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
