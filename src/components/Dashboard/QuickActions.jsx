import { ArrowRight } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { QUICK_ACTIONS } from '../../data/mockData';
import clsx from 'clsx';
import { useTheme } from '../../context/ThemeContext';

export default function QuickActions() {
    const { user } = useUser();
    const { theme } = useTheme();
    const actions = QUICK_ACTIONS[user.role] || [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {actions.map((action, index) => (
                <div
                    key={index}
                    className={clsx(
                        'p-4 rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer group',
                        theme === 'dark' ? 'bg-gray-900 border-gray-800 text-white hover:bg-gray-800' : 'bg-white border-gray-100 text-gray-800 hover:bg-gray-50'
                    )}
                >
                    <div className={clsx(
                        'w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors',
                        theme === 'dark' ? 'bg-gray-800 text-green-400 group-hover:bg-gray-700' : 'bg-green-50 text-green-600 group-hover:bg-green-100'
                    )}>
                        <action.icon size={20} />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Access Now <ArrowRight size={12} />
                    </p>
                </div>
            ))}
        </div>
    );
}
