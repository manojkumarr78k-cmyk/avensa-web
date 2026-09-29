import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ArchitectureFlow from './components/ArchitectureFlow';
import DryingChamberCard from './components/DryingChamberCard';
import PackingCard from './components/PackingCard';
import SystemStatus from './components/SystemStatus';
import TemperatureHumidityChart from './components/TemperatureHumidityChart';
import DataLogs from './components/DataLogs';
import AlertsPanel from './components/AlertsPanel';
import MachinePreview from './components/MachinePreview';
import { useSimulatedData } from './hooks/useSimulatedData';

export default function App() {
  const { data, chartData, logs, currentTime } = useSimulatedData();

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-area">
        <Header currentTime={currentTime} />

        <main className="main-content">
          <div className="dashboard-grid">
            {/* Row 1: Architecture Flow */}
            <div className="dashboard-row row-arch">
              <ArchitectureFlow />
            </div>

            {/* Row 2: Drying + Packing + System Status */}
            <div className="dashboard-row row-main">
              <div className="drying-packing-col">
                <DryingChamberCard data={data} />
                <PackingCard data={data} />
              </div>
              <div className="right-col">
                <SystemStatus lastUpdated={data.lastUpdated} />
                <MachinePreview />
              </div>
            </div>

            {/* Row 3: Chart + Data Logs + Alerts */}
            <div className="dashboard-row row-bottom">
              <TemperatureHumidityChart
                chartData={chartData}
                currentTemp={data.temperature}
                currentHum={data.humidity}
              />
              <DataLogs logs={logs} />
              <AlertsPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
