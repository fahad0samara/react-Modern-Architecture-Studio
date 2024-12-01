import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Cpu, HardDrive, Clock, Activity } from 'lucide-react';
import { MetricsCard } from '@/components/dashboard';
import { api } from '@/lib/api/client';

const defaultMetrics = {
  cpuUsage: 45,
  memoryUsage: 68,
  responseTime: 120,
  throughput: 850
};

export default function PerformanceMetrics() {
  const { data: performanceMetrics, isLoading, error } = useQuery({
    queryKey: ['performanceMetrics'],
    queryFn: async () => {
      const { data } = await api.get('/analytics/performance');
      return data;
    },
    placeholderData: defaultMetrics
  });

  if (isLoading) {
    return <div className="animate-pulse">Loading performance metrics...</div>;
  }

  if (error) {
    console.error('Error loading performance metrics:', error);
    return <div>Error loading performance metrics</div>;
  }

  const metrics = performanceMetrics || defaultMetrics;

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <MetricsCard
        title="CPU Usage"
        value={`${metrics.cpuUsage}%`}
        icon={<Cpu className="h-4 w-4 text-muted-foreground" />}
        description="Average utilization"
      />
      <MetricsCard
        title="Memory Usage"
        value={`${metrics.memoryUsage}%`}
        icon={<HardDrive className="h-4 w-4 text-muted-foreground" />}
        description="RAM utilization"
      />
      <MetricsCard
        title="Response Time"
        value={`${metrics.responseTime}ms`}
        icon={<Clock className="h-4 w-4 text-muted-foreground" />}
        description="Average latency"
      />
      <MetricsCard
        title="Throughput"
        value={`${metrics.throughput}/s`}
        icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        description="Requests per second"
      />
    </div>
  );
}