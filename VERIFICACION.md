# Verificación de la versión inicial

Fecha: 18 de noviembre de 2026.

## Comprobaciones locales completadas

- `npm test`: 6 pruebas aprobadas, 0 fallos. Cubren integridad del catálogo y trazas, aritmética de ACK en TCP, DORA, tratamiento de contenido TLS, enlaces y almacenamiento corrupto.
- `npm run build`: compilación estática correcta; 8 recursos en el precaché. Sin instalación de dependencias.
- `node --check src/app.js`: sintaxis correcta.
- Navegador Chromium: cambio de pasos, selección del último evento TCP, respuesta correcta al repaso, progreso separado de recorrido y repaso, reto TPV y explicación correctos.
- Los 12 escenarios de falla se abrieron y renderizaron en la vista de secuencia; los extremos también se verifican mediante pruebas de datos.
- Tema claro y oscuro revisados visualmente. Catálogo móvil probado mediante apertura, elección de HTTPS, selección de falla y cambio de paso.
- Pantalla estrecha con zoom real de Chromium: ancho CSS efectivo de 340 px; ancho de documento 337 px, sin desbordamiento horizontal de la página. Esto no equivale a una prueba en un teléfono físico.
- Se corrigieron etiquetas accesibles de la navegación compacta y botones con texto oculto; controles de salto e inicio tienen manejo explícito.

## Límites de la validación

No se ejecutó auditoría externa de accesibilidad ni Lighthouse. No se importan capturas ni se ejecuta criptografía real. La funcionalidad offline está implementada mediante service worker y precaché; la desconexión física del dispositivo no se ha ensayado. No se ha realizado una revisión independiente por un especialista de todo el contenido educativo.

La compilación en Vercel ejecuta `npm test && npm run build`, de modo que estas comprobaciones se repiten en cada despliegue.
