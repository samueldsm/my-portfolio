# Validación de la primera entrega

Fecha de comprobación: 24 de noviembre de 2026.

## Entorno

- Node.js 26.13.1
- Yarn 1.22.22
- Next.js 14.2.5
- Navegador Chromium mediante Playwright CLI local

## Comprobaciones realizadas

| Recorrido | Resultado |
| --- | --- |
| Compilación de producción con `yarn build` | Correcta. Se generaron `/es`, `/en`, `/es/casos/portafolio` y `/en/case-studies/portfolio`. |
| Entrada raíz | Redirige a `/es`. |
| Rutas españolas e inglesas | Cargan con HTTP 200, título y contenido en el idioma esperado. |
| Cambio de idioma | El selector de `/es` lleva a `/en` y actualiza el idioma del documento. |
| Ruta directa de los casos | Ambos casos cargan con HTTP 200 y muestran un enlace de contacto. |
| Escritorio y móvil | La portada y el caso se revisaron en 1280 px y 360 px. No se detectó desbordamiento horizontal. |
| Teclado | El foco inicial del caso llega al enlace de vuelta y después al selector de idioma. |
| Consola | No se observaron errores ni avisos de la aplicación. El único mensaje fue la recomendación de React DevTools en desarrollo. |

## Límites pendientes

- La validación se realizó localmente. Falta repetir las rutas públicas después del despliegue autorizado.
- El atributo `lang` se actualiza en cliente según la ruta. Una futura mejora de internacionalización puede establecerlo en el HTML inicial de cada versión.
- La automatización se ejecutó mediante Playwright CLI disponible en el entorno. La instalación de `@playwright/test` no terminó por una descarga que no respondió y no se modificó `package.json` con esa dependencia.
- Falta revisión humana con lectores externos y la incorporación de un caso profesional autorizado.
