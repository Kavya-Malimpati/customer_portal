import Typography from '../../common/components/Typography/Typography';

const Home = () => {
    return (
        <>
            {/* Main Content */}
            <main
                className='flex-1 w-full px-6 py-12'
                style={{
                    backgroundColor: 'var(--bg-page)',
                }}
            >
                <div className='max-w-7xl mx-auto'>
                    <Typography variant='h1' className='mb-4'>
                        Welcome to Pure
                    </Typography>
                    <Typography variant='body1' style={{ color: 'var(--text-secondary)' }}>
                        This is your home page. Start building amazing applications here.
                    </Typography>
                </div>
            </main>
        </>
    );
};

export default Home;
