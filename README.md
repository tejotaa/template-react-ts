# Template React + TypeScript

¡Bienvenido al **Template React + TypeScript**! Este proyecto sirve como un boilerplate para crear aplicaciones modernas utilizando React y TypeScript. Está diseñado para ser escalable, fácil de usar y personalizable.

## 🚀 Características

- **React 19**: La última versión de React para construir interfaces de usuario rápidas y dinámicas.
- **TypeScript**: Tipado estático para un desarrollo más seguro y eficiente.
- **Estructura modular**: Organización clara y escalable para proyectos grandes.
- **Configuración inicial**: Incluye configuraciones predefinidas para ESLint, Prettier y más.
- **Soporte para pruebas**: Configuración lista para Jest y Testing Library.
- **Estilos modernos**: Compatible con CSS Modules, SASS o Styled Components.

## 📂 Estructura del proyecto

```
template-react-ts/
├── __tests__/         # Tests unitarios
│   ├── components/    # Ficheros de tests unitarios para los componentes
|   └── pages/         # Ficheros de tests unitarios para las páginas
├── cypress/           # Tests end-to-end
│   ├── e2e/           # Ficheros test end-to-end
|   └── support/       # Ficheros de configuración de Cypress
├── public/            # Archivos públicos
├── src/
│   ├── assets/        # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── hooks/         # Hooks personalizados
│   ├── utils/         # Funciones utilitarias
│   └── App.tsx        # Componente raíz
├── package.json       # Dependencias y scripts
└── README.md          # Documentación del proyecto
```

## 🛠️ Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/)

## 🚧 Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/template-react-ts.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd template-react-ts
   ```

3. Renombra el proyecto:

   - Abre el archivo `package.json` y cambia el nombre del proyecto en la propiedad `"name"`.

   ```json
   {
     "name": "nombre-de-tu-proyecto",
   }
   ```

   - Cambia el nombre del directorio del proyecto.

   ```bash
   mv template-react-ts nombre-de-tu-proyecto
   ```

4. Instala las dependencias:

   ```bash
   npm install
   ```

## ▶️ Uso

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`.

## 🧪 Pruebas

Ejecuta las pruebas unitarias con:

```bash
npm run test
```

Para ejecutar las pruebas end-to-end con Cypress:

```bash
npm run cypress:open (o `npm run cypress:run` para ejecutar en modo headless)
```

Para ejecutar ambas pruebas (unitarias y end-to-end) de forma simultánea:

```bash
npm run all-tests
```

## 📦 Construcción para producción

Genera una versión optimizada para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `build/`.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este template, por favor:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`).
3. Realiza un commit de tus cambios (`git commit -m 'Agrega nueva feature'`).
4. Haz un push a la rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).

---

¡Gracias por usar este template! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue.
