# Rick and Morty Explorer

## Descripción

**Rick and Morty Explorer** es una aplicación web que permite a los usuarios explorar personajes, episodios y ubicaciones del universo de Rick and Morty. Utiliza la API de Rick and Morty para obtener los datos, gestionando el estado con Zustand, manejando los formularios con React Hook Form, y las peticiones de datos con Tanstack Query.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **TypeScript**: Un superset de JavaScript que añade tipado estático.
- **Tanstack Query**: Librería para el manejo de datos asincrónicos y su caché.
- **Zustand**: Librería para el manejo del estado global en React.
- **React Hook Form**: Librería para la gestión de formularios en React.
- **API de Rick and Morty**: Fuente de datos para personajes, episodios y ubicaciones.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/rick-and-morty-explorer.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd rickandmorty
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Crea un archivo .env en la raíz del proyecto con la configuración de la API si es necesario:
   ```bash
    REACT_APP_API_URL=https://rickandmortyapi.com/api
   ```
5. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

   ## Uso

   - Navegación: Explora la lista de personajes y episodios.
   - Filtros: Usa el formulario para filtrar personajes por nombre, estado y especie.
   - Detalles: Haz clic en un personaje para ver más detalles.

## Estructura del Proyecto

```bash
src/
│
├── components/ # Componentes reutilizables de la UI
├── hooks/ # Custom hooks para lógica reutilizable
├── pages/ # Páginas de la aplicación
├── store/ # Estado global gestionado con Zustand
├── styles/ # Estilos con CSS Modules
└── utils/ # Utilidades y funciones de ayuda
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

