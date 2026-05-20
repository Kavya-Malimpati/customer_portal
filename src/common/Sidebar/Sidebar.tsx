import '../../styles/tokens.css';
 
import { useState } from 'react';
import { FiBarChart2, FiClipboard, FiCreditCard, FiFile, FiSettings } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
 
interface SidebarItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  subItems?: SidebarItem[];
}
 
const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <FiBarChart2 />,
  },
  {
    id: 'billing',
    label: 'Billing',
    path: '/billing',
    icon: <FiCreditCard />,
  },
  {
    id: 'claims',
    label: 'Claims',
    path: '/claims',
    icon: <FiClipboard />,
  },
  {
    id: 'policy',
    label: 'Policy',
    path: '/policy',
    icon: <FiFile />,
  },
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    icon: <FiSettings />,
  },
];
 
interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}
 
function Sidebar({ isOpen = true, onClose, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['profile']);
 
  const toggleExpand = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId],
    );
  };
 
  const handleNavigate = (path: string) => {
    navigate(path);
    onClose?.();
  };
 
  const isActive = (path: string) => location.pathname === path;
 
  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const active = isActive(item.path);
 
    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasSubItems) {
              toggleExpand(item.id);
            } else {
              handleNavigate(item.path);
            }
          }}
          className={`
            w-full flex items-center transition-all duration-200 relative
            ${isCollapsed ? 'justify-center p-3' : 'gap-3 px-4 py-3 text-left'}
            ${level === 0 ? 'text-base font-medium' : 'text-sm font-normal'}
            ${active 
              ? `${isCollapsed ? 'bg-blue-100 text-blue-600' : 'border-l-4 bg-blue-50 text-blue-600'}` 
              : 'text-gray-700 hover:bg-gray-100'
            }
            ${level > 0 && !isCollapsed ? 'pl-12' : ''}
          `}
          style={{
            ...(level > 0 && !isCollapsed && { paddingLeft: `var(--space-${4 + level * 2})` }),
            ...(active && !isCollapsed && {
              borderLeftColor: 'var(--color-primary)',
            }),
          }}
          title={isCollapsed ? item.label : undefined}
        >
          <span className={`flex items-center ${isCollapsed ? 'text-xl' : 'text-lg'}`}>
            {item.icon}
          </span>
          {!isCollapsed && (
            <span className='flex-1 text-lg'>{item.label}</span>
          )}
        </button>

        {hasSubItems && isExpanded && !isCollapsed && (
          <div className='bg-gray-50'>
            {item.subItems?.map(subItem => renderSidebarItem(subItem, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-sm
        transition-all duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed ? 'w-16' : 'w-64'}
        md:translate-x-0
      `}
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Toggle Button - Desktop only */}
      {onToggleCollapse && (
        <button
          onClick={onToggleCollapse}
          className='hidden md:flex items-center justify-center w-full p-3 text-gray-600 hover:bg-gray-100 border-b border-gray-200 transition-colors'
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 19l-7-7 7-7m8 14l-7-7 7-7' />
          </svg>
        </button>
      )}
      
      <nav className='h-full overflow-y-auto overflow-x-hidden'>
        <div className='py-4'>
          <div className='space-y-1'>{SIDEBAR_ITEMS.map(item => renderSidebarItem(item))}</div>
        </div>
      </nav>
    </aside>
  );
}
 
export default Sidebar;
 
 