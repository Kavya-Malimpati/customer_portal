import { useState } from 'react';
 
import { Footer } from '../Footer';
import Header from '../Header';
import { Sidebar } from '../Sidebar';
 
import type { ReactNode } from 'react';
interface MainLayoutProps {
  children: ReactNode;
  onLogout?: () => void;
}
 
const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
    <div className='h-screen w-full flex flex-col'>
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
 
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
 
        <main className='flex-1 md:ml-0 flex flex-col overflow-hidden'>
          <div className='flex-1 overflow-y-auto'>{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
 
export default MainLayout;