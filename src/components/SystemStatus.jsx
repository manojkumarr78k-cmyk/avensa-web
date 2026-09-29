import React from 'react';
import { Wifi, Cpu, Cloud, Upload, Clock } from 'lucide-react';

export default function SystemStatus({ lastUpdated }) {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">System Status</span>
        </div>
      </div>
      <div className="card-body">
        <div className="status-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={15} style={{ color: '#64748b' }} />
            <span className="label">ESP32 Controller</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot online"></span>
            <span style={{ color: '#16a34a' }}>ONLINE</span>
          </div>
        </div>
        <div className="status-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cloud size={15} style={{ color: '#64748b' }} />
            <span className="label">Cloud Connection</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot online"></span>
            <span style={{ color: '#16a34a' }}>CONNECTED</span>
          </div>
        </div>
        <div className="status-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Upload size={15} style={{ color: '#64748b' }} />
            <span className="label">Data Upload</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot online"></span>
            <span style={{ color: '#16a34a' }}>LIVE</span>
          </div>
        </div>
        <div className="status-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Wifi size={15} style={{ color: '#64748b' }} />
            <span className="label">Network Strength</span>
          </div>
          <div className="signal-bars">
            <div className="signal-bar" style={{ height: '4px' }}></div>
            <div className="signal-bar" style={{ height: '7px' }}></div>
            <div className="signal-bar" style={{ height: '10px' }}></div>
            <div className="signal-bar" style={{ height: '13px' }}></div>
            <div className="signal-bar" style={{ height: '16px', opacity: 0.3 }}></div>
          </div>
        </div>
        <div className="status-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={15} style={{ color: '#64748b' }} />
            <span className="label">Last Updated</span>
          </div>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0f172a' }}>
            {formatTime(lastUpdated)}
          </span>
        </div>
      </div>
    </div>
  );
}
