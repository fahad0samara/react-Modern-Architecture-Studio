import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Users, UserPlus, UserCheck } from 'lucide-react';
import { MetricsCard } from '@/components/dashboard';
import { api } from '@/lib/api/client';

const defaultStats = {
  totalUsers: 1250,
  activeUsers: 890,
  newUsers: 125,
  userGrowth: 12.5,
  activeGrowth: 8.3,
  retentionRate: 85
};

export default function UserStats() {
  const { data: userStats, isLoading, error } = useQuery({
    queryKey: ['userStats'],
    queryFn: async () => {
      const { data } = await api.get('/analytics/users');
      return data;
    },
    placeholderData: defaultStats
  });

  if (isLoading) {
    return <div className="animate-pulse">Loading user stats...</div>;
  }

  if (error) {
    console.error('Error loading user stats:', error);
    return <div>Error loading user statistics</div>;
  }

  const stats = userStats || defaultStats;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricsCard
        title="Total Users"
        value={stats.totalUsers}
        change={stats.userGrowth}
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        description="Total registered users"
      />
      <MetricsCard
        title="Active Users"
        value={stats.activeUsers}
        change={stats.activeGrowth}
        icon={<UserCheck className="h-4 w-4 text-muted-foreground" />}
        description="Users active in last 30 days"
      />
      <MetricsCard
        title="New Users"
        value={stats.newUsers}
        icon={<UserPlus className="h-4 w-4 text-muted-foreground" />}
        description="New users this month"
      />
    </div>
  );
}