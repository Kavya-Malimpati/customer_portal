import '../../styles/tokens.css';

import { useState } from 'react';
import { FiBarChart2, FiClipboard, FiCreditCard, FiFile, FiSettings } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Select from '../components/Select';
import { changeLanguage } from '../../i18n';

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
}

function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n, t } = useTranslation();

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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value as 'en' | 'es');
  };

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
  ];

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const active = isActive(item.path);
    const translatedLabel = t(`sidebar.${item.id}`);

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
            w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200
            ${level === 0 ? 'text-base font-medium' : 'text-sm font-normal'}
            ${active ? 'border-l-4' : 'text-gray-700 hover:bg-gray-100'}
            ${level > 0 ? 'pl-12' : ''}
          `}
          style={{
            paddingLeft: `var(--space-${4 + level * 2})`,
            ...(active && {
              backgroundColor: 'var(--color-gray-100)',
              color: 'var(--color-primary)',
              borderLeftColor: 'var(--color-primary)',
            }),
          }}
        >
          <span className='text-lg flex items-center'>{item.icon}</span>
          <span className='flex-1 text-lg'>{translatedLabel}</span>
        </button>

        {hasSubItems && isExpanded && (
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
        fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 shadow-sm
        transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:top-0 md:h-screen md:translate-x-0
      `}
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <nav className='h-full overflow-y-auto'>
        <div className='py-4'>
          <div className='space-y-1'>{SIDEBAR_ITEMS.map(item => renderSidebarItem(item))}</div>
        </div>

      </nav>
    </aside>
  );
}

export default Sidebar;