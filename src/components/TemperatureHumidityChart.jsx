import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '10px 14px',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.07)',
          fontSize: '0.78rem',
        }}
      >
        <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
          {label}
        </div>
        {payload.map((entry, idx) => (
          <div key={idx} style={{ color: entry.color, fontWeight: 500, marginTop: '2px' }}>
            {entry.name}: {entry.value}
            {entry.name === 'Temperature' ? ' °C' : ' %'}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function TemperatureHumidityChart({ chartData, currentTemp, currentHum }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">Temperature & Humidity</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#f97316',
              }}
            />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#f97316' }}>
              {currentTemp} °C
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#3b82f6',
              }}
            />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#3b82f6' }}>
              {currentHum} %
            </span>
          </div>
        </div>
      </div>
      <div className="card-body" style={{ padding: '12px 10px 8px 0' }}>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
              domain={[35, 65]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="temp"
              name="Temperature"
              stroke="#f97316"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#f97316', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="humidity"
              name="Humidity"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={{ r: 3, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
