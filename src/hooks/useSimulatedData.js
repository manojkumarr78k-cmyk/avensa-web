import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook providing simulated real-time IoT sensor data.
 * All values oscillate within realistic ranges to make the dashboard
 * look alive without any backend.
 */
export function useSimulatedData() {
  const [data, setData] = useState({
    temperature: 58.4,
    humidity: 42,
    solarDrying: 'ACTIVE',
    exhaustFan: 'ON',
    pcmStatus: 'CHARGING',
    batteryLevel: 87,
    stickCount: 16,
    totalPerPack: 20,
    completedPacks: 24,
    feederStatus: 'RUNNING',
    packingStatus: 'WAITING',
    lastUpdated: new Date(),
  });

  const [chartData, setChartData] = useState([
    { time: '09:00', temp: 52.1, humidity: 47 },
    { time: '09:15', temp: 53.8, humidity: 46 },
    { time: '09:30', temp: 55.2, humidity: 45 },
    { time: '09:45', temp: 56.4, humidity: 44 },
    { time: '10:00', temp: 57.1, humidity: 43 },
    { time: '10:15', temp: 57.8, humidity: 42 },
    { time: '10:30', temp: 58.4, humidity: 42 },
  ]);

  const [logs, setLogs] = useState([
    { time: '10:24 AM', temp: 58.4, humidity: 42, fan: 'ON', count: 16, status: 'Running' },
    { time: '10:23 AM', temp: 57.8, humidity: 43, fan: 'ON', count: 15, status: 'Running' },
    { time: '10:22 AM', temp: 57.1, humidity: 44, fan: 'ON', count: 14, status: 'Running' },
    { time: '10:21 AM', temp: 56.9, humidity: 45, fan: 'ON', count: 13, status: 'Running' },
    { time: '10:20 AM', temp: 56.4, humidity: 46, fan: 'ON', count: 12, status: 'Running' },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate sensor data changes every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setData((prev) => {
        const tempDelta = (Math.random() - 0.5) * 1.2;
        const humDelta = (Math.random() - 0.5) * 1.5;
        const batDelta = (Math.random() - 0.5) * 0.5;

        let newTemp = Math.max(55, Math.min(60, prev.temperature + tempDelta));
        let newHum = Math.max(40, Math.min(48, prev.humidity + humDelta));
        let newBat = Math.max(82, Math.min(92, prev.batteryLevel + batDelta));
        let newCount = prev.stickCount;
        let newPacks = prev.completedPacks;
        let newPackingStatus = prev.packingStatus;
        let newFeederStatus = prev.feederStatus;

        // Every ~6 seconds, increment stick count
        if (Math.random() > 0.5) {
          newCount = prev.stickCount + 1;
          if (newCount > 20) {
            newCount = 1;
            newPacks = prev.completedPacks + 1;
          }
          if (newCount === 20) {
            newPackingStatus = 'PACK READY';
            newFeederStatus = 'PAUSED';
          } else {
            newPackingStatus = 'WAITING';
            newFeederStatus = 'RUNNING';
          }
        }

        return {
          ...prev,
          temperature: Math.round(newTemp * 10) / 10,
          humidity: Math.round(newHum),
          batteryLevel: Math.round(newBat),
          stickCount: newCount,
          completedPacks: newPacks,
          packingStatus: newPackingStatus,
          feederStatus: newFeederStatus,
          lastUpdated: new Date(),
        };
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Add chart data point every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setChartData((prev) => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        const newPoint = {
          time: timeStr,
          temp: Math.round((55 + Math.random() * 5) * 10) / 10,
          humidity: Math.round(40 + Math.random() * 8),
        };
        const updated = [...prev, newPoint];
        return updated.length > 12 ? updated.slice(-12) : updated;
      });
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return { data, chartData, logs, currentTime };
}
