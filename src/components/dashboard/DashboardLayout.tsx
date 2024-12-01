import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LayoutDashboard, 
  Users, 
  LineChart, 
  Activity,
  DollarSign
} from 'lucide-react';

interface DashboardLayoutProps {
  overview: React.ReactNode;
  analytics: React.ReactNode;
  users: React.ReactNode;
  performance: React.ReactNode;
  revenue: React.ReactNode;
}

export default function DashboardLayout({
  overview,
  analytics,
  users,
  performance,
  revenue
}: DashboardLayoutProps) {
  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="overview" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="revenue" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Revenue
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="border-none p-0">
          {overview}
        </TabsContent>
        <TabsContent value="analytics" className="border-none p-0">
          {analytics}
        </TabsContent>
        <TabsContent value="users" className="border-none p-0">
          {users}
        </TabsContent>
        <TabsContent value="performance" className="border-none p-0">
          {performance}
        </TabsContent>
        <TabsContent value="revenue" className="border-none p-0">
          {revenue}
        </TabsContent>
      </Tabs>
    </div>
  );
}