'use client';

import React from 'react';

interface SavedProfile {
  id: string;
  name: string;
  device: string;
  dpi: number;
  gameStyle: string;
  createdAt: Date;
}

interface SavedProfilesProps {
  profiles: SavedProfile[];
  onLoadProfile: (profile: SavedProfile) => void;
  onDeleteProfile: (id: string) => void;
}

export default function SavedProfiles({
  profiles,
  onLoadProfile,
  onDeleteProfile,
}: SavedProfilesProps) {
  return (
    <div className="glass rounded-xl p-6 mt-4 space-y-3">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300">
          <div className="flex-1">
            <h4 className="font-bold text-lg">{profile.name}</h4>
            <p className="text-sm text-gray-400">
              🎮 {profile.device} • DPI: {profile.dpi} • {profile.gameStyle}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onLoadProfile(profile)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300"
            >
              📂 Cargar
            </button>
            <button
              onClick={() => onDeleteProfile(profile.id)}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all duration-300"
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
