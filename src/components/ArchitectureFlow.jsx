import React from 'react';
import { Cpu, Cloud, Monitor, Radio } from 'lucide-react';

const steps = [
  {
    icon: Radio,
    iconClass: 'sensor',
    title: 'SENSORS',
    desc: 'DHT22 + IR Sensor',
  },
  {
    icon: Cpu,
    iconClass: 'esp',
    title: 'ESP32',
    desc: 'Collects & Sends Data',
  },
  {
    icon: Cloud,
    iconClass: 'cloud',
    title: 'CLOUD SERVER',
    desc: 'Stores Real-Time Data',
  },
  {
    icon: Monitor,
    iconClass: 'dashboard',
    title: 'WEB / MOBILE',
    desc: 'Monitor, Analyse, Alerts',
  },
];

export default function ArchitectureFlow() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">System Architecture</span>
        </div>
        <span className="badge badge-live">LIVE</span>
      </div>
      <div className="arch-flow">
        {steps.map((step, idx) => (
          <React.Fragment key={step.title}>
            <div className="arch-step">
              <div className={`arch-step-icon ${step.iconClass}`}>
                <step.icon size={22} />
              </div>
              <div className="arch-step-title">{step.title}</div>
              <div className="arch-step-desc">{step.desc}</div>
            </div>
            {idx < steps.length - 1 && (
              <div className="arch-arrow">
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                  <path
                    d="M0 8H28M28 8L22 2M28 8L22 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
