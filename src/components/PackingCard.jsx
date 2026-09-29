import React from 'react';
import { Package, Loader, CheckCircle, Box } from 'lucide-react';

export default function PackingCard({ data }) {
  const progress = (data.stickCount / data.totalPerPack) * 100;
  const isPackReady = data.stickCount >= data.totalPerPack;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">Packing Section (Live)</span>
        </div>
        <span className={`badge ${isPackReady ? 'badge-active' : 'badge-running'}`}>
          {isPackReady ? 'PACK READY' : 'RUNNING'}
        </span>
      </div>
      <div className="card-body">
        {/* Metrics */}
        <div className="packing-grid">
          <div className="packing-metric">
            <div className="label">Current Count</div>
            <div className="value" style={{ color: isPackReady ? '#16a34a' : '#0f172a' }}>
              {data.stickCount} / {data.totalPerPack}
            </div>
          </div>
          <div className="packing-metric">
            <div className="label">Feeder Status</div>
            <div className="value" style={{ color: data.feederStatus === 'RUNNING' ? '#16a34a' : '#d97706' }}>
              {data.feederStatus}
            </div>
          </div>
          <div className="packing-metric">
            <div className="label">Packing Status</div>
            <div className="value" style={{ color: isPackReady ? '#16a34a' : '#d97706' }}>
              {data.packingStatus}
            </div>
          </div>
          <div className="packing-metric">
            <div className="label">Completed Packs</div>
            <div className="value">{data.completedPacks}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-label">
            <span>Counting Progress</span>
            <span>{data.stickCount} / {data.totalPerPack} sticks</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${progress}%`,
                background: isPackReady
                  ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                  : undefined,
              }}
            />
          </div>
        </div>

        {/* Visual Cards */}
        <div className="packing-visuals">
          <div className="packing-visual-card">
            <div className="visual-title">Counting & Grouping</div>
            <div className="counting-visual">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className={`stick ${i < data.stickCount ? 'counted' : 'uncounted'}`}
                />
              ))}
            </div>
            <div className="visual-content" style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
              IR Sensor → Count → Servo Group
            </div>
          </div>
          <div className="packing-visual-card">
            <div className="visual-title">Last Packed Output</div>
            <div style={{ padding: '8px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Package size={28} style={{ color: '#0d9488' }} />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>20 sticks</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>per pack</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '4px' }}>
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    width: '2.5px',
                    height: '24px',
                    borderRadius: '1.5px',
                    background: 'linear-gradient(to bottom, #92400e, #d4a373)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
