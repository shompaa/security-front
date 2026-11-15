# security-front

Interfaz web con captura por webcam y OCR en el navegador. Consume [security-api](https://github.com/shompaa/security-api).

## Stack

React 18 · Vite 4 · Tailwind CSS · Redux Toolkit · React Query · React Router 6 · React Hook Form · Headless UI · react-webcam · Tesseract.js

## Estructura

```
src/
  components/   UI
  router/       rutas
  store/        estado global (Redux)
  config/       configuración
  utils/        helpers
```

## Uso

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción
```

Requiere la API corriendo; la URL base se define en `src/config`. La cámara exige HTTPS o `localhost`.

## Estado

Proyecto de 2023, sin cambios desde entonces. Sin tests.
