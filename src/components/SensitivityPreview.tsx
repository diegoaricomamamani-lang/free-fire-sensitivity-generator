'use client';

import React from 'react';
import { SensitivityValues } from '@/utils/sensitivityCalculator';

interface SensitivityPreviewProps {
  sensitivity: SensitivityValues;
  onCopy: () => void;
  copied: boolean;
}

interface SensitivityItem {
  label: string;
  icon: string;
  value: number;
  key: keyof SensitivityValues;
}

const sensitivityItems: SensitivityItem[] = [
  { label: 'General', icon: '🎯', value: 0, key: 'general' },
  { label: 'Punto Rojo', icon: '🔴', value: 0, key: 'redDot' },
  { label: 'Mira 2x', icon: '🔍', value: 0, key: 'scope2x' },
  { label: 'Mira 4x', icon: '🔭', value: 0, key: 'scope4x' },
  { label: 'Francotirador', icon: '🎯', value: 0, key: 'sniper' },
  { label: 'Cámara 360°', icon: '📹', value: 0, key: 'camera360' },
];

export default function SensitivityPreview({
  sensitivity,
  onCopy,
  copied,
}: SensitivityPreviewProps) {
  return (
    <div className="glass rounded-xl p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6">📊 Sensibilidades Calibradas</h2>

      {/* Sensitivity Grid */}
      <div className="space-y-4">
        {sensitivityItems.map((item) => {
          const value = sensitivity[item.key];
          const percentage = (value / 200) * 100;

          return (
            <div key={item.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">
                  {item.icon} {item.label}
                </span>
                <span className="text-2xl font-bold text-orange-500">{value}/200</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden border border-gray-600">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-300 rounded-full shadow-lg"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Copy Button */}
      <button
        onClick={onCopy}
        className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 ${
          copied
            ? 'bg-green-500 shadow-lg shadow-green-500/50'
            : 'bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50'
        }`}
      >
        {copied ? '✅ ¡Copiado!' : '📋 Copiar Valores'}
      </button>

      {/* Pro Tips */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 space-y-2">
        <p className="text-sm text-blue-300">
          <strong>💡 Pro Tips para No Fallar:</strong>
        </p>
        <ul className="text-xs text-blue-200 space-y-1">
          <li>✓ Usa Punto Rojo en combates cercanos</li>
          <li>✓ Mira 4x para media distancia</li>
          <li>✓ Francotirador para precisión máxima</li>
          <li>✓ Cámara 360° para giros rápidos</li>
        </ul>
      </div>

      {/* Calibration Info */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <p className="text-sm text-green-300">
          🎮 <strong>Calibración Profesional:</strong> Rango 0-200. Diseñado para máxima precisión sin fallos. Probado con jugadores pro.
        </p>
      </div>
    </div>
  );
}
