import React from 'react';
import {
  LayoutDashboard,
  Activity,
  Thermometer,
  Package,
  FileText,
  Bell,
  Settings,
  Flame,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Activity, label: 'Real-Time Data' },
  { icon: Thermometer, label: 'Chamber Monitoring' },
  { icon: Package, label: 'Packing Monitoring' },
  { icon: FileText, label: 'Reports' },
  { icon: Bell, label: 'Alerts' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-icon">
          <Flame size={20} />
        </div>
        <div className="brand-text">
          Agarbatti<br />IoT System
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Main Menu</div>
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`sidebar-nav-item ${item.active ? 'active' : ''}`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        SIH 2026 • IoT Prototype v1.0
      </div>
    </aside>
  );
}
