import { Calendar, ChevronRight } from 'lucide-react';
import { EVENTS } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';

export default function UpcomingEvents() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={clsx(
            "rounded-xl border shadow-sm h-full",
            isDark ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-100 text-gray-800"
        )}>
            <div className="p-5 border-b dark:border-gray-800 flex justify-between items-center">
                <h3 className="font-semibold text-lg">Upcoming Events</h3>
                <button className="text-xs text-green-600 hover:text-green-700 font-medium">View All</button>
            </div>
            <div className="p-5 space-y-4">
                {EVENTS.map((event) => (
                    <div key={event.id} className="flex items-start gap-4 group cursor-pointer">
                        <div className={clsx(
                            "w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0 font-bold leading-none transition-colors",
                            isDark ? "bg-gray-800 text-gray-200 group-hover:bg-green-900/30 group-hover:text-green-400" : "bg-green-50 text-green-600 group-hover:bg-green-100"
                        )}>
                            <span className="text-xs uppercase opacity-70">{event.date.split(' ')[0]}</span>
                            <span className="text-lg">{event.date.split(' ')[1].replace(',', '')}</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-sm group-hover:text-green-600 transition-colors line-clamp-1">{event.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{event.type}</p>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                ))}

                <div className="pt-2">
                    <div className={clsx(
                        "rounded-lg p-3 text-sm flex items-center gap-3",
                        isDark ? "bg-blue-900/20 text-blue-300" : "bg-blue-50 text-blue-700"
                    )}>
                        <Calendar size={18} />
                        <span>Academic Calendar 2026 available</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
