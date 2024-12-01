import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Server, Database, Wifi, AlertCircle } from 'lucide-react';
import { MetricsCard } from '@/components/dashboard';
import { api } from '@/lib/api/client';

const defaultMetrics = {
  serverUptime: 99.9,
  apiLatency: 250,
  databasePerformance: 95,
  errorRate: 0.1
};

export default function SystemStatus() {
  const { data: systemMetrics, isLoading, error } = useQuery({
    queryKey: ['systemMetrics'],
    queryFn: async () => {
      const { data } = await api.get('/analytics/system');
      return data;
    },
    placeholderData: defaultMetrics
  });

  if (isLoading) {
    return <div className="animate-pulse">Loading system metrics...</div>;
  }

  if (error) {
    console.error('Error loading system metrics:', error);
    return <div>Error loading system metrics</div>;
  }

  const metrics = systemMetrics || defaultMetrics;

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <MetricsCard
        title="Server Uptime"
        value={`${metrics.serverUptime}%`}
        icon={<Server className="h-4 w-4 text-muted-foreground" />}
        description="Last 30 days"
      />
      <MetricsCard
        title="API Latency"
        value={`${metrics.apiLatency}ms`}
        icon={<Wifi className="h-4 w-4 text-muted-foreground" />}
        description="Average response time"
      />
      <MetricsCard
        title="Database Performance"
        value={`${metrics.databasePerformance}%`}
        icon={<Database className="h-4 w-4 text-muted-foreground" />}
        description="Query performance score"
      />
      <MetricsCard
        title="Error Rate"
        value={`${metrics.errorRate}%`}
        icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
        description="Application errors"
      />
    </div>
  );
}