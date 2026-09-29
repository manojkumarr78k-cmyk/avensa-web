import React from 'react';
import MetricCard from './MetricCard';
import {
  Thermometer,
  Droplets,
  Sun,
  Fan,
  Snowflake,
  BatteryCharging,
} from 'lucide-react';

export default function DryingChamberCard({ data }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">Drying Chamber (Real-Time)</span>
        </div>
        <span className="badge badge-live">LIVE</span>
      </div>
      <div className="card-body">
        <div className="metrics-grid">
          <MetricCard
            icon={Thermometer}
            label="Temperature"
            value={data.temperature}
            unit="°C"
            color="orange"
          />
          <MetricCard
            icon={Droplets}
            label="Humidity"
            value={data.humidity}
            unit="%"
            color="blue"
          />
          <MetricCard
            icon={Sun}
            label="Solar Drying"
            status={data.solarDrying}
            color="yellow"
          />
          <MetricCard
            icon={Fan}
            label="Exhaust Fan"
            status={data.exhaustFan}
            color="green"
          />
          <MetricCard
            icon={Snowflake}
            label="PCM Status"
            status={data.pcmStatus}
            color="purple"
          />
          <MetricCard
            icon={BatteryCharging}
            label="Battery Level"
            value={data.batteryLevel}
            unit="%"
            color="green"
          />
        </div>
      </div>
    </div>
  );
}
