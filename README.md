# 🎮 Free Fire Sensitivity Generator

Generador profesional de sensibilidades para Free Fire con preview en tiempo real.

## ✨ Características

✅ **Interfaz moderna y responsiva** - Funciona en desktop y mobile  
✅ **Cálculo inteligente** - Basado en DPI y dispositivo  
✅ **8 tipos de dispositivos** - Samsung, iPhone, Xiaomi, Motorola, Huawei, Realme, OnePlus, OPPO  
✅ **4 estilos de juego** - Agresivo, Equilibrado, Defensivo, Francotirador  
✅ **Vista previa en tiempo real** - Ve los cambios al instante  
✅ **Copiar al portapapeles** - Un click para copiar todos los valores  
✅ **Sin login requerido** - Generador 100% libre  

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/diegoaricomamamani-lang/free-fire-sensitivity-generator.git
cd free-fire-sensitivity-generator

# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Tecnologías Utilizadas

- **Next.js 14** - Framework React moderno
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment

## 🎯 Cómo Usar

1. **Selecciona tu dispositivo** (marca del celular)
2. **Ajusta tu DPI personalizado** con el slider
3. **Elige tu estilo de juego** (Agresivo, Equilibrado, Defensivo, Francotirador)
4. **Copia los valores** con un click
5. **Pega en Free Fire** en Configuración → Control → Sensibilidad

## 📊 Sensibilidades Generadas

- 🎮 General
- 🔴 Punto Rojo
- 🔍 Mira 2x
- 🔭 Mira 4x
- 🌅 Mira 8x
- 🎪 AWM
- 📹 Cámara Libre

## 🔧 Estructura del Proyecto

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── SensitivityGenerator.tsx
│   │   ├── ControlPanel.tsx
│   │   └── SensitivityPreview.tsx
│   ├── utils/
│   │   └── sensitivityCalculator.ts
│   └── styles/
│       └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🌐 Desplegar en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📝 Variables de Entorno

Actualmente no requiere variables de entorno. Todo es client-side.

## 🐛 Debugging

Si tienes problemas:

```bash
# Limpiar caché de Next.js
rm -rf .next

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Correr nuevamente
npm run dev
```

## 📄 Licencia

MIT License - Libre para usar y modificar

## 🤝 Contribuciones

¿Encontraste un bug o tienes una idea? ¡Abre un issue o un pull request!

## 👨‍💻 Autor

Creado por [diegoaricomamamani-lang](https://github.com/diegoaricomamamani-lang)

---

**Disfruta del generador y domina Free Fire con la mejor sensibilidad** 🎮🔥
