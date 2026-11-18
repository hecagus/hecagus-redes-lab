# Revisión de Protocol Explorer

Fecha: 18 de noviembre de 2026. Sitio: https://protocol-explorer-alpha.vercel.app/

## Identidad y código público

El HTML identifica a Dilum Sanjaya. Su sitio oficial, https://dilum.dev/, enlaza esta URL en Primers. No se encontró un enlace al repositorio original en la interfaz, los metadatos ni las búsquedas realizadas. Esto no demuestra que el repositorio no exista o que sea privado.

Se encontró https://github.com/OUATILANAS/protocol-explorer, cuyo README describe una recreación con herramientas y cambios propios. No hay evidencia suficiente para atribuirlo al autor original. También existen repositorios homónimos de proyectos Web3 y otros productos; no son el sitio solicitado.

## Cómo está servido

Observaciones del HTML y bundle públicos, sin acceso al código fuente original:

- Aplicación estática con punto de montaje `#app`, un módulo JavaScript compilado y CSS separado.
- La marca `__vite__mapDeps` confirma una compilación con Vite.
- El bundle observado pesa 506,093 bytes sin comprimir; el HTML, 6,249 bytes. Son mediciones de esta revisión, no presupuestos permanentes de rendimiento.
- El bundle usa DOM, SVG, `requestAnimationFrame`, `localStorage` y chunks de idiomas separados. La interfaz usa diagramas, pasos y filas de paquetes.
- No se identificó un framework UI en el fragmento inspeccionado. Que la implementación sea vanilla es una inferencia; el lenguaje fuente (por ejemplo TypeScript) no se puede demostrar con este bundle.
- Se observaron 39 protocolos, español entre los idiomas, vista de red/secuencia, atajos, búsqueda, tema y selección de paquetes.
- Los headers observados incluyen CSP, HSTS, `nosniff`, `X-Frame-Options: DENY` y restricciones de permisos. Esto es una buena base, no una auditoría de seguridad completa.

## Qué funciona bien

Hace visibles los intercambios, relaciona fases con mensajes y permite inspección detallada. Ya tiene español, controles de reproducción y adaptación visual. No sería correcto presentar estas funciones como mejoras nuevas de nuestra versión.

## Oportunidades de mejora

| Oportunidad | Utilidad | Decisión en HecAgus Redes Lab |
| --- | --- | --- |
| Evaluación activa | Comprobar si el usuario entiende lo observado | Una pregunta por lección, con explicación |
| Diagnóstico basado en evidencia | Transferir el conocimiento al soporte real | Seis retos y doce escenarios de falla |
| Progreso explícito | Separar recorrer de resolver correctamente | Bitácora local con métricas separadas |
| Precisión de las conclusiones | Evitar confundir conectividad y aplicación | Notas TCP/ICMP/TLS y casos con incertidumbre |
| Distribución y mantenimiento propios | Poder modificar y desplegar libremente | Código original MIT, sin recursos copiados |

No se evaluaron una a una todas las lecciones ni se atribuyen errores concretos al original sin una prueba específica. Estas oportunidades reflejan la interfaz revisada, no una afirmación de que nunca se hayan implementado en otra versión.

## Resultado

Se construyó una alternativa propia con doce protocolos iniciales, no una copia de sus 39 lecciones. La implementación es JavaScript ESM/CSS/SVG sin dependencias, con PWA y exportación de eventos JSON. El inspector es semántico; no sustituye el inspector byte a byte ni un analizador de capturas. Esta reducción de alcance permite revisar contenido y añadir aprendizaje activo sin reutilizar material de licencia no verificada.
