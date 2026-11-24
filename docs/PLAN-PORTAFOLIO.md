# Plan de evolución del portafolio de Samuel Santiesteban

**Primer hito: un enlace que Samuel pueda enviar en una candidatura.** Al abrirlo, una persona debe entender qué aplicaciones construye, encontrar un ejemplo de su contribución y saber cómo contactarlo. La entrega comprende la portada, un caso con URL propia y el contacto, en español e inglés.

Revisión del 24 de noviembre de 2026. Las tareas y pruebas de este documento están pendientes salvo las observaciones que se indican como verificadas.

## A quién va dirigido

Samuel es ingeniero informático y desarrollador frontend. Construye y mantiene aplicaciones y tiendas en línea, integra servicios y colabora con Producto, Diseño, Backend y QA. Busca oportunidades remotas en España, Estados Unidos y Latinoamérica, tanto en equipos de desarrollo como en proyectos freelance. Sus decisiones técnicas y su trabajo con agentes pueden mostrar su evolución hacia arquitectura.

Borrador de titular para la portada:

| Español | English |
| --- | --- |
| Desarrollo frontend para aplicaciones y comercio electrónico | Frontend development for web applications and e-commerce |
| Construyo aplicaciones y tiendas con React, Next.js y TypeScript. Integro servicios y trabajo con Producto, Diseño, Backend y QA para llevar los cambios a producción. | I build applications and online stores with React, Next.js, and TypeScript. I integrate services and work with product, design, backend, and QA teams to ship changes. |

Samuel revisará el texto, el canal de contacto y las fechas o cargos que decida publicar. Puede añadir un CV cuando tenga una versión actualizada.

## Primera entrega

| Orden | Trabajo | Criterio de aceptación |
| --- | --- | --- |
| 1. Portada y contacto | Sustituir el titular «Junior Frontend Engineer» y la biografía genérica por una presentación actual. Destacar un caso y un contacto con texto visible, por ejemplo «Contactar por LinkedIn» si Samuel elige ese canal. | Desde la portada en cualquiera de los dos idiomas se entiende su especialidad y se llega directamente al caso y al canal elegido. |
| 2. Un caso compartible | Preferir una integración de tienda o aplicación que Samuel pueda explicar públicamente. Si los permisos siguen pendientes, usar una decisión del propio portafolio. | El caso tiene enlaces directos en español e inglés. Explica el problema, la contribución de Samuel, una alternativa considerada, la decisión y una evidencia que el lector puede inspeccionar. El contacto está disponible también aquí. |
| 3. Comprobación y entrega | Revisar la experiencia al abrir la portada y al recibir solo el enlace del caso. Corregir problemas que impidan leer, navegar, compartir o contactar. | Ambas entradas funcionan en móvil y escritorio. La URL compartida abre el caso en el idioma esperado incluso en una sesión nueva. Queda registrada la versión y el entorno comprobados. Tras el despliegue autorizado, verificar las URL públicas que irán en las candidaturas. |

**Cómo elegir el primer caso.** La prioridad es una integración que muestre trabajo que Samuel quiera volver a hacer. Se publicará únicamente material autorizado, incluidas capturas, marcas y detalles que pudieran identificar a un cliente. La propuesta interna de IA se describiría como propuesta si se obtiene permiso para compartirla. Se pueden explicar decisiones y resultados observables aunque no haya métricas publicables.

Una alternativa con evidencia propia es resolver cómo conservar el idioma al compartir un caso. Samuel puede comparar guardar el idioma en el navegador con incluirlo en la URL, explicar cuál eligió y comprobar qué ve una segunda persona al abrir el enlace. Si interviene un agente, el caso puede recoger qué tarea recibió, qué revisó o corrigió Samuel y qué prueba respaldó la decisión. El relato se redactará después de observar el resultado.

## Calidad y trabajo con agentes desde el primer cambio

Al revisar el HTML público el 24 de noviembre, la portada respondió con HTTP 200 y conservaba el cargo junior y los proyectos anteriores. En el repositorio, «First Portfolio» enlaza a la propia portada y el idioma del documento está fijado en inglés. La revisión visual, las interacciones y el rendimiento quedan por medir. [Portafolio publicado](https://samuelsantiesteban.vercel.app/)

- **Navegación.** Usar Playwright desde la primera entrega para comprobar portada → caso → contacto y la entrada por URL directa en una sesión nueva. Verificar el destino de contacto sin enviar mensajes. Revisar en ambos idiomas el título de la página, el atributo `lang` y el selector de idioma. Comprobar manualmente el foco con teclado, los nombres de los enlaces y la lectura en una pantalla estrecha. Registrar tamaños probados, entorno y limitaciones. Una traza de ejemplo puede acompañar el caso una vez revisado su contenido. [Trazas de Playwright](https://playwright.dev/docs/trace-viewer)
- **Instalación reproducible.** El README indica Yarn, pero Git ignora `yarn.lock`. Seleccionar versiones compatibles de Node y Yarn, documentarlas, corregir la exclusión y versionar el archivo de bloqueo correspondiente. Comprobar la instalación desde un clon limpio. Incluir el plan y la guía de agentes en la próxima entrega versionada para que estén disponibles también allí. [README](../README.md) · [Reglas de Git](../.gitignore)
- **Migración acotada.** Trabajar en paralelo con la redacción. El proyecto fija Next.js 14.2.5, una rama fuera de soporte. En la revisión, 16.x estaba en soporte activo y los parches de seguridad de 15.x se extendían hasta el 31 de enero de 2027. Evaluar una 16.x con parches vigentes, revisar los requisitos de Node y la compatibilidad de React y NextUI, y validar en una vista previa. El script actual usa `next lint`, retirado en Next.js 16. Ejecutar ESLint, compilación y pruebas de navegación por separado. Comprobar también el dominio de los enlaces generados por el sitemap antes de publicar. [Scripts del proyecto](../package.json) · [Soporte de Next.js](https://nextjs.org/support-policy) · [Guía de actualización](https://nextjs.org/docs/app/guides/upgrading/version-16)
- **Instrucciones del repositorio.** Seguir la guía existente de privacidad y CodeGraph. Una vez verificados los comandos de instalación y prueba, enlazarlos desde la guía al README. Aplicar ODD de forma proporcional: para una decisión importante guardar la alternativa, el cambio y su evidencia. Usar CodeGraph cuando el repositorio tenga índice y haya una pregunta de código que lo justifique. Reservar una skill para un procedimiento que se repita. [AGENTS.md](../AGENTS.md) · [Guía de Gentle AI](https://github.com/Gentleman-Programming/gentle-ai/blob/main/docs/usage.md)

## Comprobar si ayuda a conseguir oportunidades

Con la primera versión lista, Samuel puede compartirla con alguien que contrate y con alguien que desarrolle. Tras unos 30 segundos de lectura, preguntar «¿Para qué trabajo me considerarías?», «¿Qué hice yo en el proyecto?» y «¿Dónde me contactarías?». Anotar dónde buscaron y qué faltó. Si cuesta identificar la contribución, mejorar el caso. Si cuesta contactar, corregir ese recorrido. Las preguntas que se repitan en candidaturas servirán para elegir el siguiente trabajo.

## Qué añadir después

| Si ocurre esto… | Siguiente inversión |
| --- | --- |
| Un equipo o cliente pide otro ejemplo de integraciones o de colaboración. | Añadir un segundo caso autorizado, con evidencia de la contribución personal de Samuel. |
| Samuel quiere optar a proyectos de herramientas para desarrolladores y le interesa mantener una demo abierta. | Probar el laboratorio defensivo con un proyecto propio, un aviso de dependencia conocido y fechado, una propuesta de actualización revisable y pruebas. Mantener el código analizado local y comprobar red, telemetría y modelo antes de prometer privacidad. Algunas consultas, como `npm audit`, envían metadatos de paquetes al registro. Evaluar un repositorio independiente y licencia MIT o Apache 2.0 cuando haya un ejemplo que otra persona pueda clonar y ejecutar. [Documentación de npm](https://docs.npmjs.com/cli/v11/commands/npm-audit/#audit-endpoints) |
| Los visitantes hacen preguntas recurrentes que siguen costando de resolver al leer el sitio. | Probar un asistente sobre contenido público revisado, con referencias y una respuesta explícita cuando falte evidencia. Evaluar exactitud en ambos idiomas, privacidad, latencia y costo. Mantener las credenciales de administración de GitHub fuera del asistente y fijar un límite de gasto antes de publicarlo. |
| Una decisión o flujo resulta difícil de entender con texto y capturas. | Prototipar una ilustración propia o una secuencia breve en Figma. Comparar su claridad con el caso actual y ofrecer una versión con movimiento reducido. |
| El mantenimiento de varios proyectos genera tareas repetidas. | Automatizar una tarea concreta de GitHub con permisos por repositorio, comprobaciones y cambios revisables en PR. Verificar el acceso a los repositorios elegidos antes de diseñar la integración. |

## Próxima sesión de trabajo

1. Revisar la portada actual en móvil y escritorio. Confirmar con Samuel el titular y el contacto público.
2. Elegir el caso que ya se pueda contar. Bocetar su versión breve en ambos idiomas y señalar qué evidencia existe y cuál falta producir.
3. Preparar el recorrido portada → caso → contacto y acordar las URL que se podrán compartir. Usar ese recorrido como primera prueba de navegador.

Las **4–6 horas semanales** son una hipótesis de planificación. La disponibilidad y el presupuesto están pendientes de definir. El primer hito se considera listo por sus criterios de aceptación. Los experimentos posteriores se estimarán cuando Samuel elija uno y conozca el esfuerzo real de la primera entrega.
