# Evaluación 1 – App Expo + Expo Router

Aplicación móvil hecha con Expo, React Native y TypeScript usando Expo Router (enrutamiento basado en archivos). Incluye autenticación simple, pantalla de Login, navegación por pestañas (Home y Explore) y un Modal.

## ✨ Características

- Expo SDK 54 con React Native 0.81 y React 19
- Expo Router con `_layout.tsx`, tabs y modal
- Autenticación en memoria (usuarios de ejemplo)
- TypeScript configurado
- ESLint con `eslint-config-expo`
- Iconos (expo-symbols, @expo/vector-icons) y Haptics

## 🚀 Requisitos

- Node.js 18+ (LTS recomendado)
- npm 9+ (o pnpm/yarn si prefieres, pero el proyecto trae scripts con npm)
- Android Studio (emulador Android) o Xcode (simulador iOS) si deseas emular; o la app Expo Go en tu dispositivo

## 🧩 Instalación y ejecución

1) Instalar dependencias

```powershell
npm install
```

2) Iniciar el proyecto (Metro + menú Expo)

```powershell
npx expo start
```

3) Abrir la app en:

- Dispositivo físico con Expo Go (escanea el QR)
- Emulador Android: selecciona "a" en la terminal o usa `npm run android`
- Simulador iOS (solo macOS): selecciona "i" o usa `npm run ios`
- Web: `npm run web`

## 📁 Estructura principal

```
app/
   _layout.tsx           # Stack raíz: (tabs), login, modal
   login.tsx             # Pantalla de login
   modal.tsx             # Modal
   (tabs)/
      _layout.tsx         # Layout de pestañas
      index.tsx           # Home (contador, toggle, logout)
      explore.tsx         # Pantalla Explore
components/
   context/
      auth-context.tsx    # Contexto de autenticación (in‑memory)
constants/
   theme.ts              # Colores y tema
```

## 🔐 Autenticación (demo)

El contexto `auth-context.tsx` mantiene un usuario en memoria y valida contra una lista fija:

- user@mail.com / 1234
- admin@mail.com / admin

Si el login es exitoso, se navega a `/(tabs)`. En Home puedes cerrar sesión (Logout) y regresar a `/login`.

## 🧪 Scripts disponibles

```json
"start": "expo start",            // Inicia el servidor de desarrollo
"android": "expo start --android", // Abre en emulador Android
"ios": "expo start --ios",        // Abre en simulador iOS (macOS)
"web": "expo start --web",        // Ejecuta en web
"lint": "expo lint",              // Linter (ESLint)
"reset-project": "node ./scripts/reset-project.js" // Restaura proyecto base
```

Comandos rápidos (PowerShell):

```powershell
npm run lint
npm run android
npm run web
```

## 🛠️ Desarrollo

- Enrutamiento por archivos: cada archivo en `app/` es una ruta. `_layout.tsx` define layouts/anidaciones.
- Estilos con `StyleSheet` de React Native.
- Tipado con TypeScript (tsconfig incluido).
- Linting: el workspace incluye reglas y acciones de guardado para ordenar imports y aplicar fixes.

## 🧯 Solución de problemas

- Metro cache extraño: limpia caché
   ```powershell
   npx expo start -c
   ```
- Emulador Android no abre: verifica que Android Studio esté instalado y que tengas un AVD creado; abre Android Studio una vez y luego reintenta `npm run android`.
- Error de sintaxis (por ejemplo “Identifier expected”): normalmente es una coma faltante o JSX mal formado; revisa el archivo que indique el error y valida objetos/JSX.

## 📦 Build y publicación

Para builds de producción con EAS (recomendado):

- Documentación: https://docs.expo.dev/eas/
- Requiere una cuenta Expo y configurar `eas.json`.

## 📚 Recursos

- Expo: https://docs.expo.dev/
- Expo Router: https://docs.expo.dev/router/introduction/
- React Native: https://reactnative.dev/docs/environment-setup

---

Hecho con Expo + React Native. Si necesitas agregar más pantallas, endpoints o un backend real de auth, puedo ayudarte a extender esta base.

## 🎥 Video demostrativo

[Ver en YouTube](https://www.youtube.com/watch?v=9aytSh6XS8E)
