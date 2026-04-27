/**
 * MainLayout Component
 * 
 * Purpose: Provides the main application layout structure with fixed header and sidebar
 * Key Features:
 * - Fixed positioned header that stays at the top
 * - Fixed positioned sidebar that slides in/out on mobile
 * - Scrollable main content area that flows independently
 * - Responsive design with mobile-first approach
 * - Footer included within the scrollable main content
 * 
 * Props:
 * - children: ReactNode - Main content to be rendered
 * - onLogout?: () => void - Optional logout handler
 * 
 * Layout Structure:
 * - Header: Fixed at top (h-16)
 * - Sidebar: Fixed on left side, responsive behavior
 * - Main: Scrollable content area with footer
 */

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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true); // Start collapsed

  return (
    <div className='h-screen w-full flex flex-col overflow-hidden'>
      {/* Fixed Header */}
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Layout Container with Fixed Sidebar and Scrollable Main */}
      <div className='flex flex-1 overflow-hidden pt-16'>
        {/* Fixed Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Scrollable Main Content Area */}
        <main className={`flex-1 overflow-y-auto bg-gray-50 transition-all duration-300 ${
          sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'
        }`}>
          <div className='min-h-full flex flex-col'>
            {/* Main Content */}
            <div className='flex-1 p-6'>
              {children}
            </div>
            {/* Footer at bottom of scrollable content */}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};
 
export default MainLayout;