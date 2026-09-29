import React from 'react';
import { Bell, User, Flame } from 'lucide-react';

export default function Header({ currentTime }) {
  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <header className="header">
      {/* Left - Title */}
      <div className="header-left">
        <div className="header-logo">
          <Flame size={20} />
        </div>
        <div className="header-title-group">
          <h1>AGARBATTI DRYING &amp; PACKING SYSTEM</h1>
          <p>IoT Based Real-Time Monitoring</p>
        </div>
      </div>

      {/* Right - Controls */}
      <div className="header-right">
        {/* DateTime */}
        <div className="header-datetime">
          <div className="date">{formatDate(currentTime)}</div>
          <div className="time">{formatTime(currentTime)}</div>
        </div>

        {/* Notification Bell */}
        <button className="header-icon-btn" aria-label="Notifications">
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>

        {/* User */}
        <div className="header-user">
          <div className="header-user-avatar">
            <User size={16} />
          </div>
          <div className="header-user-info">
            <div className="name">Admin</div>
            <div className="role">Village Production Unit</div>
          </div>
        </div>
      </div>
    </header>
  );
}
