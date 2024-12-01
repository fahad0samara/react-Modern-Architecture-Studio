import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsChartProps {
  data: ChartData<'line'>;
  title: string;
}

export default function AnalyticsChart({ data, title }: AnalyticsChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Line options={options} data={data} />
    </div>
  );
}