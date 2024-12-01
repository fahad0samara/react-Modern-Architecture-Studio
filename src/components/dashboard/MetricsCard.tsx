import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  description?: string;
}

export default function MetricsCard({
  title,
  value,
  change,
  icon,
  description
}: MetricsCardProps) {
  const isPositive = change && change > 0;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between space-y-0 pb-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon}
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        {change !== undefined && (
          <div className={`flex items-center text-sm ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {isPositive ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
}