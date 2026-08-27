'use client';

import React from 'react';
import { Device, GameStyle } from '@/utils/sensitivityCalculator';

interface ControlPanelProps {
  devices: Device[];
  gameStyles: GameStyle[];
  selectedDevice: string;
  customDPI: number;
  gameStyle: string;
  onDeviceChange: (device: string) => void;
  onDPIChange: (dpi: number) => void;
  onGameStyleChange: (style: string) => void;
}

export default function ControlPanel({
  devices,
  gameStyles,
  selectedDevice,
  customDPI,
  gameStyle,
  onDeviceChange,
  onDPIChange,
  onGameStyleChange,
}: ControlPanelProps) {
  return (
    <div className="glass rounded-xl p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6">⚙️ Configuración</h2>

      {/* Device Selection */}
      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-200">📱 Selecciona tu Dispositivo</label>
        <select
          value={selectedDevice}
          onChange={(e) => onDeviceChange(e.target.value)}
          className="select-field"
        >
          {devices.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name} (DPI: {device.baseDPI})
            </option>
          ))}
        </select>
      </div>

      {/* DPI Input */}
      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-200">
          🎮 DPI Personalizado: <span className="text-orange-500 font-bold">{customDPI}</span>
        </label>
        <input
          type="range"
          min="100"
          max="800"
          value={customDPI}
          onChange={(e) => onDPIChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>100 DPI</span>
          <span>800 DPI</span>
        </div>
      </div>

      {/* Game Style Selection */}
      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-200">🎯 Estilo de Juego</label>
        <div className="grid grid-cols-2 gap-3">
          {gameStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => onGameStyleChange(style.id)}
              className={`p-3 rounded-lg font-semibold transition-all duration-300 ${
                gameStyle === style.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/50'
                  : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-sm text-blue-300">
          💡 <strong>Tip:</strong> Los valores se calculan basándose en tu dispositivo y DPI. Puedes ajustar después en el juego.
        </p>
      </div>
    </div>
  );
}
