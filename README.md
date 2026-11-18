# HecAgus Redes Lab

Laboratorio original de redes en español mexicano, con 12 lecciones interactivas, 12 preguntas de repaso, 12 escenarios de falla y 6 retos de diagnóstico. Incluye un caso ficticio de conectividad de terminal de pago.

## Ejecutar

Requiere Node.js 22 o superior. No requiere dependencias, cuenta, API key ni base de datos.

```sh
npm test
npm run dev
npm run build
```

El servidor usa el puerto 5173 o `PORT`. La compilación produce `dist/`. Vercel usa `vercel.json` y el comando `npm run build`.

## Qué incluye

- TCP, DNS, HTTP/1.1, HTTPS, TLS 1.3, UDP, DHCPv4, ARP, ICMPv4, IPv4, QUIC y Ethernet.
- Topología SVG y vista de secuencia, reproducción, velocidad, pasos, selección y enlaces profundos.
- Inspección semántica de campos; exportación JSON de eventos conceptuales, expresamente distinta de una captura PCAP.
- Escenario normal y de falla por lección, con explicaciones y fuentes RFC.
- Preguntas con retroalimentación, retos y progreso local exportable.
- Tema claro/oscuro, diseño adaptable, navegación por teclado y movimiento reducido.
- Service worker generado con versión por contenido y precaché de la aplicación para uso posterior sin conexión.

La primera visita debe tener conexión y terminar de instalar el service worker. Las actualizaciones se activan cuando se cierran las pestañas de la versión anterior. Las fuentes RFC externas requieren conexión. El progreso no se sincroniza ni se restaura automáticamente desde la exportación.

## Arquitectura

JavaScript ESM, CSS y SVG nativos. Cero dependencias de ejecución o de compilación. `src/data.js` contiene escenarios y preguntas; `src/model.js`, validación de progreso y enlaces; `src/app.js`, interfaz y reproducción; `src/style.css`, temas y adaptación. `scripts/build.mjs` compila el directorio estático y genera el precaché.

La reproducción usa un temporizador controlado, pausado cuando la pestaña se oculta. Las posiciones se pueden compartir con `#/tcp/2/normal` o `#/dns/1/fallo`. El avance se guarda con validación y tolerancia a almacenamiento bloqueado/corrupto. Espacio reproduce/pausa, flechas cambian de paso cuando el foco no está en controles, `/` busca y Escape cierra el catálogo móvil.

## Alcance técnico

Son escenarios sintéticos escritos para enseñar. No hay sockets, captura de tráfico, paquetes binarios, mediciones reales, procesamiento de tarjetas, descifrado TLS ni un motor completo de TCP/QUIC. Un evento puede resumir varios mensajes. Las direcciones usan rangos de documentación o valores locales de ejemplo.

La versión inicial cubre menos protocolos que Protocol Explorer. Aporta prácticas de diagnóstico y explicaciones propias; no es un fork ni una réplica completa. No se copiaron código, traducciones, ilustraciones ni recursos de aquel sitio. Consulta [AUDITORIA.md](AUDITORIA.md) para la revisión y [FUENTES.md](FUENTES.md) para referencias técnicas.

## Verificación

`npm test` comprueba integridad de los escenarios, referencias entre nodos, secuencias TCP, orden DHCP, tratamiento conceptual de TLS, enlaces y persistencia corrupta. La compilación no necesita instalar paquetes. Las comprobaciones visuales y de producción se registran en `VERIFICACION.md`.

## Costos y privacidad

No usa servicios de IA, analítica ni recursos de terceros en ejecución. Solo se guardan preferencias y progreso en el navegador. El alojamiento está sujeto a los límites y condiciones del plan de Vercel; el proyecto no configura compras ni servicios de pago.

## Licencia

MIT, para este código original. HecAgus Redes Lab no está afiliado con Protocol Explorer ni con su autor.
