/* eslint-disable react/prop-types */
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '../ChartContainer';

export const GrowthCharts = ({ data }) => (
  <ChartContainer title="Growth Over Time">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#3B82F6" />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);
