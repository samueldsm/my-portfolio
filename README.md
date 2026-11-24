# Portafolio de Samuel Santiesteban

Portafolio personal construido con Next.js, React y TypeScript. El proyecto está planificando la actualización de su contenido y la incorporación progresiva de casos de estudio y demostraciones de trabajo asistido por agentes.

## Desarrollo local

Con Node.js 20.9 o superior y Yarn 1.22.22 instalados:

```bash
yarn install
yarn dev
```

Abre `http://localhost:3000`. Otros scripts disponibles son `yarn lint`, `yarn build` y `yarn start`; este último requiere una compilación previa. `postbuild` genera el sitemap: consulta `next-sitemap.config.js` al configurar el dominio. No incluyas credenciales ni archivos de entorno locales en el repositorio.

## Estructura

- `src/app`: página, layout, proveedores y estilos globales.
- `src/components/modules/Home`: secciones y datos de experiencia y proyectos.
- `src/components/common` y `src/components/ui`: componentes compartidos y navegación.
- `public`: recursos estáticos y archivos de sitemap.

## Plan y trabajo con agentes

- [Plan de evolución](docs/PLAN-PORTAFOLIO.md).
- [Instrucciones para agentes](AGENTS.md).

El plan distingue entregas ya construidas de ampliaciones futuras. El contenido profesional debe basarse en información confirmada y autorizada para publicar.
