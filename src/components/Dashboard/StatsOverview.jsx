import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useUser, ROLES } from '../../context/UserContext';
import { DASHBOARD_STATS } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';

const DATA = [
    { name: 'Jan', students: 4000, fees: 2400 },
    { name: 'Feb', students: 3000, fees: 1398 },
    { name: 'Mar', students: 2000, fees: 9800 },
    { name: 'Apr', students: 2780, fees: 3908 },
    { name: 'May', students: 1890, fees: 4800 },
    { name: 'Jun', students: 2390, fees: 3800 },
];

export default function StatsOverview() {
    const { user } = useUser();
    const { theme } = useTheme();
    const stats = DASHBOARD_STATS[user.role] || [];

    const isDark = theme === 'dark';

    return (
        <div className="space-y-6">
            {/* Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={clsx(
                            'p-6 rounded-xl border shadow-sm flex items-center justify-between',
                            isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
                        )}
                    >
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.title}</p>
                            <h3 className="text-2xl font-bold mt-1 dark:text-white">{stat.value}</h3>
                            <span className={clsx(
                                "text-xs font-semibold px-2 py-0.5 rounded-full mt-2 inline-block",
                                stat.color === 'green' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                                    stat.color === 'blue' ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                                        "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            )}>
                                {stat.change}
                            </span>
                        </div>
                        <div className={clsx(
                            "p-3 rounded-xl",
                            isDark ? "bg-gray-800" : "bg-gray-50"
                        )}>
                            <stat.icon size={24} className={isDark ? "text-gray-300" : "text-gray-600"} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section (Admin/Faculty only usually, but showing for all for demo visual) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={clsx("p-6 rounded-xl border shadow-sm", isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100")}>
                    <h3 className="text-lg font-semibold mb-6 dark:text-white">Enrollment Trends</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={DATA}>
                                <defs>
                                    <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} vertical={false} />
                                <XAxis dataKey="name" stroke={isDark ? "#9CA3AF" : "#6B7280"} axisLine={false} tickLine={false} />
                                <YAxis stroke={isDark ? "#9CA3AF" : "#6B7280"} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: isDark ? '#1F2937' : '#fff',
                                        borderColor: isDark ? '#374151' : '#e5e7eb',
                                        borderRadius: '8px',
                                        color: isDark ? '#fff' : '#000'
                                    }}
                                />
                                <Area type="monotone" dataKey="students" stroke="#10B981" fillOpacity={1} fill="url(#colorStudents)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className={clsx("p-6 rounded-xl border shadow-sm", isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100")}>
                    <h3 className="text-lg font-semibold mb-6 dark:text-white">Fee Collection</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={DATA}>
                                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} vertical={false} />
                                <XAxis dataKey="name" stroke={isDark ? "#9CA3AF" : "#6B7280"} axisLine={false} tickLine={false} />
                                <YAxis stroke={isDark ? "#9CA3AF" : "#6B7280"} axisLine={false} tickLine={false} />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{
                                        backgroundColor: isDark ? '#1F2937' : '#fff',
                                        borderColor: isDark ? '#374151' : '#e5e7eb',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Bar dataKey="fees" fill="#0D9488" radius={[4, 4, 0, 0]} barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
