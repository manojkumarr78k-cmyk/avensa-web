import React from 'react';

export default function MetricCard({ icon: Icon, label, value, unit, status, color }) {
  return (
    <div className="metric-card">
      <div className={`metric-icon ${color}`}>
        <Icon size={20} />
      </div>
      <div className="metric-info">
        <div className="metric-label">{label}</div>
        {value !== undefined && (
          <div className="metric-value">
            {value}
            {unit && <span className="unit"> {unit}</span>}
          </div>
        )}
        {status && (
          <div
            className="metric-status"
            style={{
              color:
                status === 'ACTIVE' || status === 'ON'
                  ? '#16a34a'
                  : status === 'CHARGING'
                  ? '#7c3aed'
                  : '#0d9488',
            }}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
