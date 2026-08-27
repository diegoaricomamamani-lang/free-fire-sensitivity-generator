'use client';

import React, { useState, useEffect } from 'react';
import { DEVICES, GAME_STYLES, calculateSensitivity, SensitivityValues } from '@/utils/sensitivityCalculator';
import SensitivityPreview from './SensitivityPreview';
import ControlPanel from './ControlPanel';
import SavedProfiles from './SavedProfiles';

interface SavedProfile {
  id: string;
  name: string;
  device: string;
  dpi: number;
  gameStyle: string;
  sensitivity: SensitivityValues;
  createdAt: Date;
}

export default function SensitivityGenerator() {
  const [selectedDevice, setSelectedDevice] = useState('samsung');
  const [customDPI, setCustomDPI] = useState(403);
  const [gameStyle, setGameStyle] = useState('balanced');
  const [sensitivity, setSensitivity] = useState<SensitivityValues | null>(null);
  const [copied, setCopied] = useState(false);
  const [savedProfiles, setSavedProfiles] = useState<SavedProfile[]>([]);
  const [showProfiles, setShowProfiles] = useState(false);

  // Cargar perfiles guardados
  useEffect(() => {
    const stored = localStorage.getItem('ff-profiles');
    if (stored) {
      setSavedProfiles(JSON.parse(stored));
    }
  }, []);

  // Calcular sensibilidad
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
    
    const text = `General: ${sensitivity.general}\nPunto Rojo: ${sensitivity.redDot}\nMira 2x: ${sensitivity.scope2x}\nMira 4x: ${sensitivity.scope4x}\nFrancotirador: ${sensitivity.sniper}\nCámara 360°: ${sensitivity.camera360}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveProfile = (profileName: string) => {
    if (!sensitivity) return;

    const newProfile: SavedProfile = {
      id: Date.now().toString(),
      name: profileName,
      device: selectedDevice,
      dpi: customDPI,
      gameStyle: gameStyle,
      sensitivity: sensitivity,
      createdAt: new Date(),
    };

    const updated = [...savedProfiles, newProfile];
    setSavedProfiles(updated);
    localStorage.setItem('ff-profiles', JSON.stringify(updated));
  };

  const handleLoadProfile = (profile: SavedProfile) => {
    setSelectedDevice(profile.device);
    setCustomDPI(profile.dpi);
    setGameStyle(profile.gameStyle);
  };

  const handleDeleteProfile = (id: string) => {
    const updated = savedProfiles.filter(p => p.id !== id);
    setSavedProfiles(updated);
    localStorage.setItem('ff-profiles', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-text">🎮 Free Fire Sensitivity Generator</h1>
          <p className="text-gray-300 text-lg">Calibración profesional sin fallos - Rango 0-200</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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
            onSaveProfile={handleSaveProfile}
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

        {/* Saved Profiles */}
        {savedProfiles.length > 0 && (
          <div className="mb-8">
            <button
              onClick={() => setShowProfiles(!showProfiles)}
              className="w-full glass rounded-xl p-4 text-left font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              💾 Perfiles Guardados ({savedProfiles.length})
            </button>
            {showProfiles && (
              <SavedProfiles
                profiles={savedProfiles}
                onLoadProfile={handleLoadProfile}
                onDeleteProfile={handleDeleteProfile}
              />
            )}
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 glass rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">💡 ¿Cómo usar el generador?</h3>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Selecciona tu dispositivo (marca del celular)</li>
            <li>✅ Ingresa tu DPI personalizado si lo tienes</li>
            <li>✅ Elige tu estilo de juego preferido</li>
            <li>✅ Copia los valores y pégalos en Free Fire</li>
            <li>✅ Guarda tus perfiles favoritos para después</li>
            <li>✅ Estos valores están calibrados para máxima precisión (0-200)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
