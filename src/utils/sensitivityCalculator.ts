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
  scope8x: number;
  awm: number;
  freeCamera: number;
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

  // Base values
  const base = {
    general: Math.round(50 * dpiRatio * multiplier),
    redDot: Math.round(65 * dpiRatio * multiplier),
    scope2x: Math.round(45 * dpiRatio * multiplier),
    scope4x: Math.round(35 * dpiRatio * multiplier),
    scope8x: Math.round(25 * dpiRatio * multiplier),
    awm: Math.round(30 * dpiRatio * multiplier),
    freeCamera: Math.round(55 * dpiRatio * multiplier),
  };

  // Ensure values are between 1 and 100
  return {
    general: Math.max(1, Math.min(100, base.general)),
    redDot: Math.max(1, Math.min(100, base.redDot)),
    scope2x: Math.max(1, Math.min(100, base.scope2x)),
    scope4x: Math.max(1, Math.min(100, base.scope4x)),
    scope8x: Math.max(1, Math.min(100, base.scope8x)),
    awm: Math.max(1, Math.min(100, base.awm)),
    freeCamera: Math.max(1, Math.min(100, base.freeCamera)),
  };
}

export { DEVICES, GAME_STYLES };
