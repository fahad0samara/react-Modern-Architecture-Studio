import React from 'react';
import {
  DashboardLayout,
  AnalyticsChart,
  UserStats,
  SystemStatus,
  RevenueMetrics,
  PerformanceMetrics
} from '@/components/dashboard';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api/client';

export default function Dashboard() {
  const { data: analyticsData } = useQuery({
    queryKey: ['analytics'],
    queryFn: async () => {
      const { data } = await api.get('/analytics');
      return data;
    },
  });

  const overviewSection = (
    <div className="grid gap-4">
      <AnalyticsDashboard />
      <UserStats />
      <RevenueMetrics />
      <SystemStatus />
    </div>
  );

  const analyticsSection = (
    <div className="grid gap-4">
      <AnalyticsChart
        data={analyticsData?.projectViews}
        title="Project Views Over Time"
      />
      <AnalyticsChart
        data={analyticsData?.userEngagement}
        title="User Engagement Metrics"
      />
    </div>
  );

  const usersSection = (
    <div className="grid gap-4">
      <UserStats />
      <AnalyticsChart
        data={analyticsData?.userGrowth}
        title="User Growth Trends"
      />
    </div>
  );

  const performanceSection = (
    <div className="grid gap-4">
      <PerformanceMetrics />
      <SystemStatus />
      <AnalyticsChart
        data={analyticsData?.systemPerformance}
        title="System Performance Metrics"
      />
    </div>
  );

  const revenueSection = (
    <div className="grid gap-4">
      <RevenueMetrics />
      <AnalyticsChart
        data={analyticsData?.revenueMetrics}
        title="Revenue Growth"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardLayout
        overview={overviewSection}
        analytics={analyticsSection}
        users={usersSection}
        performance={performanceSection}
        revenue={revenueSection}
      />
    </div>
  );
}