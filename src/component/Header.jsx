import { Zap } from 'lucide-react';
import { GrowthCharts } from './charts/GrowthCharts';

export const Header = ({ data }) => (
  <div className="flex flex-col items-start justify-between mb-8">
    
    <div className="flex items-center justify-between w-full mb-4">
      <h1 className="text-4xl font-bold text-blue-900 flex items-center">
        Growth Chart (Yearly Data)
      </h1>
    </div>

    {data && data.byYear && (
      <div className="w-full">
        <GrowthCharts data={data.byYear} />
      </div>
    )}
  </div>
);
