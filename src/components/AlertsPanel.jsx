import React from 'react';
import { CheckCircle, Sun, Package, Snowflake, AlertTriangle } from 'lucide-react';

const alerts = [
  {
    icon: CheckCircle,
    text: 'System operating normally',
    time: '10:24 AM',
    type: 'info',
    color: '#22c55e',
  },
  {
    icon: Sun,
    text: 'Solar drying active — chamber receiving direct sunlight',
    time: '10:22 AM',
    type: 'info',
    color: '#eab308',
  },
  {
    icon: Package,
    text: 'Pack completed (20 sticks) — ready for collection',
    time: '10:20 AM',
    type: 'neutral',
    color: '#3b82f6',
  },
  {
    icon: Snowflake,
    text: 'PCM thermal storage charging — storing excess heat',
    time: '10:18 AM',
    type: 'info',
    color: '#8b5cf6',
  },
  {
    icon: AlertTriangle,
    text: 'High temperature detected (59.8°C) — Auto Fan ON',
    time: '10:15 AM',
    type: 'warning',
    color: '#ef4444',
  },
];

export default function AlertsPanel() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">Alerts & Notifications</span>
        </div>
        <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 500 }}>
          {alerts.length} alerts
        </span>
      </div>
      <div className="card-body">
        {alerts.map((alert, idx) => (
          <div className="alert-item" key={idx}>
            <div
              className={`alert-dot ${alert.type}`}
              style={{ background: alert.color }}
            />
            <div style={{ flex: 1 }}>
              <div className="alert-text">{alert.text}</div>
              <div className="alert-time">{alert.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
