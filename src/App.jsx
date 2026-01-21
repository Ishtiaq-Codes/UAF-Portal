import { ThemeProvider } from './context/ThemeContext';
import { UserProvider, useUser } from './context/UserContext';
import Layout from './components/Layout/Layout';
import QuickActions from './components/Dashboard/QuickActions';
import StatsOverview from './components/Dashboard/StatsOverview';
import UpcomingEvents from './components/Dashboard/UpcomingEvents';
import ActivityFeed from './components/Dashboard/ActivityFeed';
import { ROLES } from './context/UserContext';

function DashboardContent() {
  const { user } = useUser();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Welcome back,</p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-1">{user.name}</h2>
        </div>
        <div className="text-sm px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg font-semibold border border-green-200 dark:border-green-800">
          UAF Portal • {user.role} Dashboard
        </div>
      </div>

      <QuickActions />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <StatsOverview />
        </div>
        <div className="space-y-6">
          <div className="h-[320px]">
            <UpcomingEvents />
          </div>
          <div className="h-[400px]">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <DashboardContent />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
