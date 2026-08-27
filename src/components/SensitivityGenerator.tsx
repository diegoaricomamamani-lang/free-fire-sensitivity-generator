'use client';

import React, { useState, useEffect } from 'react';
import { DEVICES, GAME_STYLES, calculateSensitivity, SensitivityValues } from '@/utils/sensitivityCalculator';
import SensitivityPreview from './SensitivityPreview';
import ControlPanel from './ControlPanel';

export default function SensitivityGenerator() {
  const [selectedDevice, setSelectedDevice] = useState('samsung');
  const [customDPI, setCustomDPI] = useState(403);
  const [gameStyle, setGameStyle] = useState('balanced');
  const [sensitivity, setSensitivity] = useState<SensitivityValues | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const calculated = calculateSensitivity(selectedDevice, customDPI, gameStyle);
      setSensitivity(calculated);
    } catch (error) {
      console.error('Error calculating sensitivity:', error);
    }
  }, [selectedDevice, customDPI, gameStyle]);

  const handleCopyToClipboard = () => {
    if (!sensitivity) return;
    
    const text = `General: ${sensitivity.general}\nPunto Rojo: ${sensitivity.redDot}\nMira 2x: ${sensitivity.scope2x}\nMira 4x: ${sensitivity.scope4x}\nMira 8x: ${sensitivity.scope8x}\nAWM: ${sensitivity.awm}\nCámara Libre: ${sensitivity.freeCamera}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">🎯 Free Fire Sensitivity Generator</h1>
          <p className="text-gray-300 text-lg">Configura tu sensibilidad perfecta para dominar el juego</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Control Panel */}
          <ControlPanel
            devices={DEVICES}
            gameStyles={GAME_STYLES}
            selectedDevice={selectedDevice}
            customDPI={customDPI}
            gameStyle={gameStyle}
            onDeviceChange={setSelectedDevice}
            onDPIChange={setCustomDPI}
            onGameStyleChange={setGameStyle}
          />

          {/* Preview */}
          {sensitivity && (
            <SensitivityPreview
              sensitivity={sensitivity}
              onCopy={handleCopyToClipboard}
              copied={copied}
            />
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 glass rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">💡 ¿Cómo usar el generador?</h3>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Selecciona tu dispositivo (marca del celular)</li>
            <li>✅ Ingresa tu DPI personalizado si lo tienes</li>
            <li>✅ Elige tu estilo de juego preferido</li>
            <li>✅ Copia los valores y pégalos en Free Fire</li>
            <li>✅ Ajusta según tu preferencia personal si es necesario</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
