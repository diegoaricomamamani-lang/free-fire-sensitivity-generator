export interface Device {
  id: string;
  name: string;
  baseDPI: number;
}

export interface GameStyle {
  id: string;
  name: string;
  multiplier: number;
}

export interface SensitivityValues {
  general: number;
  redDot: number;
  scope2x: number;
  scope4x: number;
  sniper: number;
  camera360: number;
}

const DEVICES: Device[] = [
  { id: 'samsung', name: 'Samsung', baseDPI: 403 },
  { id: 'iphone', name: 'iPhone', baseDPI: 401 },
  { id: 'xiaomi', name: 'Xiaomi', baseDPI: 403 },
  { id: 'motorola', name: 'Motorola', baseDPI: 401 },
  { id: 'huawei', name: 'Huawei', baseDPI: 403 },
  { id: 'realme', name: 'Realme', baseDPI: 403 },
  { id: 'oneplus', name: 'OnePlus', baseDPI: 401 },
  { id: 'oppo', name: 'OPPO', baseDPI: 401 },
];

const GAME_STYLES: GameStyle[] = [
  { id: 'aggressive', name: '🎯 Agresivo', multiplier: 1.3 },
  { id: 'balanced', name: '⚖️ Equilibrado', multiplier: 1.0 },
  { id: 'defensive', name: '🛡️ Defensivo', multiplier: 0.7 },
  { id: 'sniper', name: '🔍 Francotirador', multiplier: 0.5 },
];

export function calculateSensitivity(
  deviceId: string,
  customDPI: number,
  gameStyleId: string
): SensitivityValues {
  const device = DEVICES.find(d => d.id === deviceId);
  const gameStyle = GAME_STYLES.find(g => g.id === gameStyleId);

  if (!device || !gameStyle) {
    throw new Error('Device or game style not found');
  }

  const dpiRatio = customDPI / device.baseDPI;
  const multiplier = gameStyle.multiplier;

  // Calibración profesional con rango 0-200
  // Basada en configuraciones de jugadores pro que no fallan ni un solo tiro
  const base = {
    general: Math.round(100 * dpiRatio * multiplier),
    redDot: Math.round(130 * dpiRatio * multiplier),
    scope2x: Math.round(90 * dpiRatio * multiplier),
    scope4x: Math.round(70 * dpiRatio * multiplier),
    sniper: Math.round(60 * dpiRatio * multiplier),
    camera360: Math.round(110 * dpiRatio * multiplier),
  };

  // Asegurar valores entre 0 y 200 (máxima precisión)
  return {
    general: Math.max(0, Math.min(200, base.general)),
    redDot: Math.max(0, Math.min(200, base.redDot)),
    scope2x: Math.max(0, Math.min(200, base.scope2x)),
    scope4x: Math.max(0, Math.min(200, base.scope4x)),
    sniper: Math.max(0, Math.min(200, base.sniper)),
    camera360: Math.max(0, Math.min(200, base.camera360)),
  };
}

export { DEVICES, GAME_STYLES };
