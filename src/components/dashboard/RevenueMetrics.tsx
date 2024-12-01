import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { DollarSign, TrendingUp, ShoppingCart, CreditCard } from 'lucide-react';
import { MetricsCard } from '@/components/dashboard';
import { api } from '@/lib/api/client';

const defaultStats = {
  totalRevenue: 125000,
  revenueGrowth: 15.8,
  averageProjectValue: 45000,
  projectsCompleted: 28
};

export default function RevenueMetrics() {
  const { data: revenueStats, isLoading, error } = useQuery({
    queryKey: ['revenueStats'],
    queryFn: async () => {
      const { data } = await api.get('/analytics/revenue');
      return data;
    },
    placeholderData: defaultStats
  });

  if (isLoading) {
    return <div className="animate-pulse">Loading revenue metrics...</div>;
  }

  if (error) {
    console.error('Error loading revenue metrics:', error);
    return <div>Error loading revenue metrics</div>;
  }

  const stats = revenueStats || defaultStats;

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <MetricsCard
        title="Total Revenue"
        value={`$${(stats.totalRevenue).toLocaleString()}`}
        change={stats.revenueGrowth}
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        description="Last 30 days"
      />
      <MetricsCard
        title="Revenue Growth"
        value={`${stats.revenueGrowth}%`}
        icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        description="Month over month"
      />
      <MetricsCard
        title="Avg Project Value"
        value={`$${(stats.averageProjectValue).toLocaleString()}`}
        icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
        description="Per project"
      />
      <MetricsCard
        title="Projects Completed"
        value={stats.projectsCompleted}
        icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        description="This month"
      />
    </div>
  );
}