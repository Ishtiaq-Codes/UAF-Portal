import { Bell, Search, Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useUser, ROLES } from '../../context/UserContext';
import clsx from 'clsx';
import { NOTIFICATIONS } from '../../data/mockData';
import { useState } from 'react';

export default function Navbar({ sidebarOpen }) {
    const { theme, toggleTheme } = useTheme();
    const { user, switchRole } = useUser();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const unreadCount = NOTIFICATIONS.filter(n => !n.isRead).length;

    return (
        <header
            className={clsx(
                'fixed top-0 right-0 z-30 flex h-16 items-center justify-between px-6 transition-all duration-300 border-b backdrop-blur-sm',
                theme === 'dark' ? 'bg-gray-900/90 border-gray-800 text-white' : 'bg-white/90 border-gray-200 text-gray-800',
                sidebarOpen ? 'left-64' : 'left-20'
            )}
        >
            <div className="flex items-center gap-4">
                <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
            </div>

            <div className="flex items-center gap-6">
                {/* Role Switcher for Demo */}
                <select
                    value={user.role}
                    onChange={(e) => switchRole(e.target.value)}
                    className="text-xs bg-transparent border border-gray-300 dark:border-gray-700 rounded px-2 py-1 outline-none"
                >
                    {Object.values(ROLES).map(r => <option key={r} value={r}>{r}</option>)}
                </select>

                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <Bell size={20} />
                        {unreadCount > 0 && (
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900" />
                        )}
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 mt-3 w-80 rounded-xl border bg-white p-2 shadow-lg dark:bg-gray-900 dark:border-gray-800">
                            <div className="flex justify-between px-2 py-2 border-b dark:border-gray-700 mb-2">
                                <h3 className="font-semibold text-sm">Notifications</h3>
                                <button className="text-xs text-green-600 hover:underline">Mark all read</button>
                            </div>
                            <div className="space-y-1 max-h-64 overflow-y-auto">
                                {NOTIFICATIONS.map(n => (
                                    <div key={n.id} className="p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                                        <p className="text-sm font-medium">{n.title}</p>
                                        <p className="text-xs text-gray-500 line-clamp-1">{n.message}</p>
                                        <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative pl-4 border-l dark:border-gray-700">
                    <button className="flex items-center gap-3 outline-none" onClick={() => setShowUserMenu(!showUserMenu)}>
                        <div className="text-right hidden md:block">
                            <p className="text-sm font-medium leading-none">{user.name}</p>
                            <p className="text-xs text-gray-500 mt-1">{user.role}</p>
                        </div>
                        <img src={user.avatar} alt="User" className="h-9 w-9 rounded-full ring-2 ring-green-500/20" />
                    </button>
                </div>
            </div>
        </header>
    );
}
