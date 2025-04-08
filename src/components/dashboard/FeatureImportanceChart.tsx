
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureImportance {
  name: string;
  importance: number;
}

interface FeatureImportanceChartProps {
  data: FeatureImportance[];
  className?: string;
}

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = ({ data, className }) => {
  // Sort data by importance in descending order
  const sortedData = [...data].sort((a, b) => b.importance - a.importance);
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Feature Importance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={sortedData}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 90,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 'dataMax + 0.05']} />
            <YAxis dataKey="name" type="category" width={85} />
            <Tooltip 
              formatter={(value: number) => [(value * 100).toFixed(1) + '%', 'Importance']}
            />
            <Bar dataKey="importance" fill="#3182ce" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FeatureImportanceChart;
