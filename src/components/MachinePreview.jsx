import React from 'react';

/**
 * MachinePreview renders an SVG illustration of the agarbatti drying & packing machine.
 * 
 * Key elements shown:
 * - Transparent polycarbonate drying chamber with mesh trays
 * - Separate solar PV panel (for electrical power only)
 * - PCM thermal storage section
 * - Exhaust fan
 * - DHT22 sensor
 * - Separate packing section with IR sensor
 * - Solar charge controller → Battery → ESP32
 * 
 * The PV panel is shown SEPARATELY — it provides ELECTRICAL power,
 * NOT direct solar heating. The polycarbonate chamber receives sunlight directly.
 */
export default function MachinePreview() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-title">Live Machine View</span>
        </div>
        <span className="badge badge-live">LIVE</span>
      </div>
      <div className="card-body" style={{ padding: '12px' }}>
        <div className="machine-preview">
          <svg
            viewBox="0 0 820 480"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Background */}
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#f1f5f9" />
              </linearGradient>
              <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(186,230,253,0.35)" />
                <stop offset="100%" stopColor="rgba(186,230,253,0.15)" />
              </linearGradient>
              <linearGradient id="pcmGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="pvGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a5f" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            <rect width="820" height="480" fill="url(#skyGrad)" rx="10" />

            {/* Sun */}
            <circle cx="120" cy="45" r="24" fill="url(#sunGrad)" opacity="0.9" />
            {/* Sun rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 120 + Math.cos(rad) * 30;
              const y1 = 45 + Math.sin(rad) * 30;
              const x2 = 120 + Math.cos(rad) * 38;
              const y2 = 45 + Math.sin(rad) * 38;
              return (
                <line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"
                  opacity="0.6"
                />
              );
            })}

            {/* Sunlight arrows to chamber (direct solar drying) */}
            <line x1="145" y1="65" x2="200" y2="130" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
            <line x1="160" y1="55" x2="240" y2="130" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
            <line x1="175" y1="48" x2="300" y2="130" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
            <text x="195" y="100" fontSize="8" fill="#d97706" fontWeight="500">Direct Sunlight</text>

            {/* === DRYING CHAMBER === */}
            <text x="130" y="125" fontSize="11" fill="#0f766e" fontWeight="700">DRYING CHAMBER</text>

            {/* Chamber frame */}
            <rect x="130" y="132" width="260" height="180" rx="6" fill="none" stroke="#64748b" strokeWidth="2" />
            {/* Transparent polycarbonate glass fill */}
            <rect x="132" y="134" width="256" height="176" rx="5" fill="url(#glassGrad)" />
            {/* Glass label */}
            <text x="140" y="150" fontSize="7.5" fill="#0369a1" fontWeight="500">Polycarbonate (Transparent)</text>

            {/* Mesh trays */}
            {[0, 1, 2].map((i) => {
              const y = 170 + i * 42;
              return (
                <g key={`tray-${i}`}>
                  <rect x="150" y={y} width="220" height="8" rx="2" fill="#d1d5db" stroke="#9ca3af" strokeWidth="0.5" />
                  {/* Agarbatti sticks on tray */}
                  {Array.from({ length: 18 }, (_, j) => (
                    <rect
                      key={j}
                      x={155 + j * 12}
                      y={y - 3}
                      width="2"
                      height="10"
                      rx="1"
                      fill="#a16207"
                      opacity="0.7"
                    />
                  ))}
                  <text x="375" y={y + 7} fontSize="6.5" fill="#64748b">Tray {i + 1}</text>
                </g>
              );
            })}

            {/* DHT22 sensor */}
            <rect x="145" y="275" width="35" height="18" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
            <text x="149" y="287" fontSize="6.5" fill="#1d4ed8" fontWeight="600">DHT22</text>

            {/* Exhaust fan */}
            <g transform="translate(340, 145)">
              <rect x="0" y="0" width="36" height="36" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
              <circle cx="18" cy="18" r="12" fill="none" stroke="#16a34a" strokeWidth="1.5" />
              {/* Fan blades */}
              <line x1="18" y1="8" x2="18" y2="28" stroke="#16a34a" strokeWidth="1.5" />
              <line x1="8" y1="18" x2="28" y2="18" stroke="#16a34a" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="3" fill="#16a34a" />
              <text x="2" y="48" fontSize="6.5" fill="#15803d" fontWeight="500">Exhaust Fan</text>
            </g>

            {/* PCM Section */}
            <rect x="130" y="320" width="100" height="34" rx="4" fill="url(#pcmGrad)" opacity="0.8" />
            <text x="142" y="340" fontSize="8" fill="#fff" fontWeight="600">PCM Storage</text>
            <text x="142" y="350" fontSize="6" fill="#e9d5ff">Thermal Energy</text>

            {/* === SOLAR PV PANEL (SEPARATE) === */}
            <text x="60" y="365" fontSize="9" fill="#1e40af" fontWeight="700">SOLAR PV PANEL</text>
            <text x="60" y="375" fontSize="6.5" fill="#64748b">(Electrical Power Only)</text>

            {/* PV Panel */}
            <rect x="55" y="382" width="130" height="55" rx="3" fill="url(#pvGrad)" stroke="#1e3a5f" strokeWidth="1.5" />
            {/* Grid lines */}
            {[0, 1, 2, 3].map((i) => (
              <line key={`pv-h-${i}`} x1="55" y1={392 + i * 12} x2="185" y2={392 + i * 12} stroke="#2563eb" strokeWidth="0.5" opacity="0.4" />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={`pv-v-${i}`} x1={72 + i * 22} y1="382" x2={72 + i * 22} y2="437" stroke="#2563eb" strokeWidth="0.5" opacity="0.4" />
            ))}

            {/* PV → Charge Controller → Battery → ESP32 flow */}
            <line x1="185" y1="410" x2="210" y2="410" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrow)" />

            {/* Charge Controller */}
            <rect x="212" y="398" width="65" height="24" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
            <text x="218" y="413" fontSize="6.5" fill="#92400e" fontWeight="500">Charge Ctrl</text>

            {/* Battery */}
            <rect x="290" y="398" width="50" height="24" rx="3" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
            <text x="296" y="413" fontSize="7" fill="#15803d" fontWeight="600">Battery</text>
            <line x1="277" y1="410" x2="290" y2="410" stroke="#94a3b8" strokeWidth="1" />

            {/* ESP32 */}
            <rect x="355" y="393" width="60" height="34" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="365" y="412" fontSize="8" fill="#1d4ed8" fontWeight="700">ESP32</text>
            <text x="363" y="422" fontSize="5.5" fill="#3b82f6">Controller</text>
            <line x1="340" y1="410" x2="355" y2="410" stroke="#94a3b8" strokeWidth="1" />

            {/* ESP32 connections */}
            <line x1="385" y1="393" x2="385" y2="360" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" />
            <text x="390" y="378" fontSize="5.5" fill="#3b82f6">Data</text>

            {/* === PACKING SECTION (SEPARATE) === */}
            <text x="490" y="125" fontSize="11" fill="#0f766e" fontWeight="700">PACKING SECTION</text>
            <text x="490" y="137" fontSize="7" fill="#64748b">(Manual Transfer from Chamber)</text>

            {/* Manual transfer arrow */}
            <g>
              <line x1="395" y1="220" x2="490" y2="220" stroke="#f97316" strokeWidth="1.5" strokeDasharray="6 4" />
              <polygon points="488,216 496,220 488,224" fill="#f97316" />
              <text x="410" y="215" fontSize="7" fill="#f97316" fontWeight="600">Manual Transfer</text>
              {/* Worker icon */}
              <circle cx="440" cy="235" r="7" fill="none" stroke="#f97316" strokeWidth="1" />
              <line x1="440" y1="242" x2="440" y2="258" stroke="#f97316" strokeWidth="1" />
              <line x1="432" y1="250" x2="448" y2="250" stroke="#f97316" strokeWidth="1" />
              <text x="424" y="270" fontSize="6" fill="#f97316">Worker</text>
            </g>

            {/* Packing frame */}
            <rect x="490" y="145" width="280" height="170" rx="6" fill="#fafafa" stroke="#64748b" strokeWidth="1.5" />

            {/* Feeding tray */}
            <rect x="505" y="160" width="80" height="40" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
            <text x="515" y="178" fontSize="7" fill="#92400e" fontWeight="600">Feeding</text>
            <text x="520" y="188" fontSize="7" fill="#92400e" fontWeight="600">Tray</text>
            {/* Sticks in feeder */}
            {Array.from({ length: 8 }, (_, i) => (
              <rect key={`feed-${i}`} x={510 + i * 9} y="165" width="2" height="14" rx="1" fill="#a16207" opacity="0.6" />
            ))}

            {/* Arrow */}
            <line x1="585" y1="180" x2="605" y2="180" stroke="#94a3b8" strokeWidth="1" />
            <polygon points="603,176 611,180 603,184" fill="#94a3b8" />

            {/* IR Sensor */}
            <rect x="612" y="165" width="50" height="30" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
            <text x="618" y="180" fontSize="7" fill="#dc2626" fontWeight="600">IR Sensor</text>
            <text x="622" y="190" fontSize="6" fill="#ef4444">Count</text>

            {/* Arrow */}
            <line x1="662" y1="180" x2="682" y2="180" stroke="#94a3b8" strokeWidth="1" />
            <polygon points="680,176 688,180 680,184" fill="#94a3b8" />

            {/* Servo grouping */}
            <rect x="690" y="160" width="65" height="40" rx="3" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
            <text x="698" y="178" fontSize="7" fill="#15803d" fontWeight="600">Servo</text>
            <text x="695" y="188" fontSize="7" fill="#15803d" fontWeight="600">Grouping</text>

            {/* Flow down to packing */}
            <line x1="722" y1="200" x2="722" y2="225" stroke="#94a3b8" strokeWidth="1" />
            <polygon points="718,223 722,231 726,223" fill="#94a3b8" />

            {/* Packing output */}
            <rect x="680" y="235" width="80" height="55" rx="4" fill="#f0fdfa" stroke="#14b8a6" strokeWidth="1.5" />
            <text x="693" y="255" fontSize="8" fill="#0f766e" fontWeight="700">PACKING</text>
            <text x="696" y="268" fontSize="7" fill="#0d9488">20 sticks</text>
            <text x="699" y="280" fontSize="7" fill="#0d9488">per pack</text>

            {/* Bundle icon in packing */}
            {Array.from({ length: 10 }, (_, i) => (
              <rect
                key={`pack-${i}`}
                x={695 + i * 5}
                y="282"
                width="2.5"
                height="14"
                rx="1"
                fill="#92400e"
                opacity="0.6"
              />
            ))}

            {/* Process flow label */}
            <rect x="505" y="250" width="155" height="55" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="515" y="266" fontSize="7.5" fill="#475569" fontWeight="600">Process Flow:</text>
            <text x="515" y="278" fontSize="6.5" fill="#64748b">Feed → IR Count → Servo Group</text>
            <text x="515" y="290" fontSize="6.5" fill="#64748b">→ Pack (20 sticks/pack)</text>

            {/* Cloud upload indicator */}
            <g transform="translate(620, 340)">
              <rect x="0" y="0" width="140" height="32" rx="4" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
              <text x="10" y="14" fontSize="7" fill="#6d28d9" fontWeight="600">☁ Cloud Upload</text>
              <text x="10" y="25" fontSize="6" fill="#7c3aed">ESP32 → WiFi → Dashboard</text>
            </g>

            {/* Labels */}
            <text x="55" y="460" fontSize="8" fill="#94a3b8" fontWeight="500">
              Agarbatti Drying & Packing System — IoT Prototype
            </text>

            {/* Arrow marker */}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="6" markerHeight="6" orient="auto-start-auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
