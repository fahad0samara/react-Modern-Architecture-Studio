import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Building2, Users, DollarSign, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api/client';

const mockData = {
  projectViews: [
    { month: 'Jan', views: 4000 },
    { month: 'Feb', views: 3000 },
    { month: 'Mar', views: 5000 },
    { month: 'Apr', views: 4500 },
    { month: 'May', views: 6000 },
    { month: 'Jun', views: 5500 },
  ],
  revenue: [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 48000 },
    { month: 'Apr', amount: 61000 },
    { month: 'May', amount: 55000 },
    { month: 'Jun', amount: 67000 },
  ],
};

const stats = [
  {
    id: 1,
    name: 'Total Projects',
    value: '45',
    change: '+12%',
    icon: Building2,
  },
  {
    id: 2,
    name: 'Active Clients',
    value: '28',
    change: '+18%',
    icon: Users,
  },
  {
    id: 3,
    name: 'Revenue',
    value: '$2.4M',
    change: '+15%',
    icon: DollarSign,
  },
  {
    id: 4,
    name: 'Growth Rate',
    value: '24%',
    change: '+4%',
    icon: TrendingUp,
  },
];

export default function AnalyticsDashboard() {
  const { data: analyticsData, isLoading } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const { data } = await api.get('/analytics');
      return data;
    },
    placeholderData: mockData,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.name}</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-gray-400" />
              </div>
              <div className="mt-4">
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                <span className="text-gray-500 text-sm ml-2">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Views</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analyticsData?.projectViews}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#4F46E5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData?.revenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#10B981"
                  fill="#10B98133"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}