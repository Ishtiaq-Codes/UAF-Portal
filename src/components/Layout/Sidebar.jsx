import { useState } from 'react';
// Used standard anchor tags for simplicity in this demo
// Actually, for a single page homepage demo, we might just use links that don't go anywhere or use hash router. 
// Standard vite react template doesn't include router by default. I should ask or just install it.
// The prompt says "Create a... homepage". I can just use anchor tags with '#' or state to switch views if requested. 
// But a sidebar usually implies routing. I'll stick to simple <a> tags or buttons for this homepage demo to avoid extra complexity unless I install react-router-dom.
// "Navigation Sidebar ... links". I'll use <a> for now.

import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';

export default function Sidebar({ isOpen, setIsOpen }) {
    const { theme } = useTheme();

    return (
        <aside
            className={clsx(
                'fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out border-r',
                isOpen ? 'w-64' : 'w-20',
                theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-800'
            )}
        >
            <div className="flex h-16 items-center justify-between px-4">
                {isOpen && <span className="text-xl font-bold tracking-tight text-green-600">UAF Portal</span>}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
            </div>

            <nav className="mt-4 px-3 space-y-2">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.name}
                        href={link.path}
                        className={clsx(
                            'flex items-center rounded-lg px-3 py-2.5 transition-colors group relative',
                            'hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                        )}
                    >
                        <link.icon size={22} className="min-w-[22px]" />
                        <span
                            className={clsx(
                                'ml-3 overflow-hidden transition-all duration-300 whitespace-nowrap',
                                isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                            )}
                        >
                            {link.name}
                        </span>
                        {!isOpen && (
                            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                                {link.name}
                            </div>
                        )}
                    </a>
                ))}
            </nav>

            <div className="absolute bottom-4 left-0 w-full px-4">
                {isOpen && (
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                        <p className="text-xs opacity-90">Spring 2026</p>
                        <p className="text-sm font-bold mt-1">Make Logic</p>
                    </div>
                )}
            </div>
        </aside>
    );
}
