import React from 'react';

export default function DataLogs({ logs }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">Recent Data Logs</span>
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Temp (°C)</th>
              <th>Humidity (%)</th>
              <th>Fan Status</th>
              <th>Count</th>
              <th>System Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((row, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 550 }}>{row.time}</td>
                <td>{row.temp}</td>
                <td>{row.humidity}</td>
                <td>
                  <span className="table-fan-badge">{row.fan}</span>
                </td>
                <td>{row.count}</td>
                <td>
                  <span className="table-status-badge">
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        display: 'inline-block',
                      }}
                    />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
