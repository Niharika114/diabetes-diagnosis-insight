
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DistributionData {
  range: string;
  diabetic: number;
  nonDiabetic: number;
}

interface DataDistributionChartProps {
  title: string;
  data: DistributionData[];
  className?: string;
}

const DataDistributionChart: React.FC<DataDistributionChartProps> = ({ title, data, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="nonDiabetic" name="Non-Diabetic" fill="#4f86c6" />
            <Bar dataKey="diabetic" name="Diabetic" fill="#ff6666" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DataDistributionChart;
