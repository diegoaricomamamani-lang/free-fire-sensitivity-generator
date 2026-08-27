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
  { label: 'Mira 8x', icon: '🌅', value: 0, key: 'scope8x' },
  { label: 'AWM', icon: '🎪', value: 0, key: 'awm' },
  { label: 'Cámara Libre', icon: '📹', value: 0, key: 'freeCamera' },
];

export default function SensitivityPreview({
  sensitivity,
  onCopy,
  copied,
}: SensitivityPreviewProps) {
  return (
    <div className="glass rounded-xl p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-6">📊 Vista Previa</h2>

      {/* Sensitivity Grid */}
      <div className="space-y-3">
        {sensitivityItems.map((item) => {
          const value = sensitivity[item.key];
          const percentage = (value / 100) * 100;

          return (
            <div key={item.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  {item.icon} {item.label}
                </span>
                <span className="text-lg font-bold text-orange-500">{value}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-300 rounded-full"
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

      {/* Summary */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
        <p className="text-sm text-gray-300">
          <strong>📌 Resumen:</strong>
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          Estos valores están optimizados para tu dispositivo y estilo de juego. Si no te sientes cómodo, 
          puedes ajustar incrementando o disminuyendo por pequeños pasos dentro del juego.
        </p>
      </div>

      {/* Quick Tips */}
      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-sm text-yellow-200">
          ⚡ <strong>Pro Tip:</strong> Prueba estos valores en una partida privada antes de jugar en línea.
        </p>
      </div>
    </div>
  );
}
