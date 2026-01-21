import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { theme } = useTheme();

    return (
        <div className={clsx('min-h-screen transition-colors duration-300', theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900')}>
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <Navbar sidebarOpen={sidebarOpen} />
            <main
                className={clsx(
                    'pt-20 pb-8 px-6 transition-all duration-300',
                    sidebarOpen ? 'ml-64' : 'ml-20'
                )}
            >
                {children}
            </main>
        </div>
    );
}
