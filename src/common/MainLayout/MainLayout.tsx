import { ReactNode } from 'react';
import Header from '../Header';

interface MainLayoutProps {
    children: ReactNode;
    onLogout?: () => void;
}

const MainLayout = ({ children, onLogout }: MainLayoutProps) => {
    return (
        <div className='min-h-screen w-full flex flex-col'>
            <Header onLogout={onLogout} />
            {children}
        </div>
    );
};

export default MainLayout;
