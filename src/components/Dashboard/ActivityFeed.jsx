import { ACTIVITY_FEED } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';
import { User, FileText, Upload, CheckCircle } from 'lucide-react';

export default function ActivityFeed() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const getIcon = (action) => {
        switch (action) {
            case 'submitted': return <FileText size={16} />;
            case 'uploaded': return <Upload size={16} />;
            case 'approved': return <CheckCircle size={16} />;
            default: return <User size={16} />;
        }
    };

    const getColor = (action) => {
        switch (action) {
            case 'submitted': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400';
            case 'uploaded': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400';
            case 'approved': return 'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400';
            default: return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
        }
    };

    return (
        <div className={clsx(
            "rounded-xl border shadow-sm h-full flex flex-col",
            isDark ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-100 text-gray-800"
        )}>
            <div className="p-5 border-b dark:border-gray-800">
                <h3 className="font-semibold text-lg">Recent Activity</h3>
            </div>
            <div className="p-5 flex-1 overflow-y-auto">
                <div className="relative border-l-2 border-gray-100 dark:border-gray-800 ml-3 space-y-8">
                    {ACTIVITY_FEED.map((item, index) => (
                        <div key={item.id} className="relative pl-8">
                            <div className={clsx(
                                "absolute -left-[9px] top-1 w-5 h-5 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center",
                                getColor(item.action)
                            )}>
                                <div className="w-1.5 h-1.5 rounded-full bg-current" />
                            </div>
                            <div>
                                <p className="text-sm">
                                    <span className="font-medium">{item.user}</span>
                                    <span className="mx-1 text-gray-500">{item.action}</span>
                                    <span className="font-medium text-green-600 dark:text-green-400">{item.target}</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
