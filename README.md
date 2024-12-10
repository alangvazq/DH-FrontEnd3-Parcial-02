# DH FrontEnd3 Parcial 02

Este proyecto es una aplicación web desarrollada con React y Vite. La aplicación permite a los usuarios ver una lista de personajes de Amiibo, agregar personajes a sus favoritos y enviar un formulario de contacto.

## Estructura del Proyecto

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd tu-repositorio
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Scripts

- `npm run dev`: Inicia el servidor de desarrollo.

## Estructura de Componentes

- **Navbar**: Barra de navegación que permite moverse entre las diferentes páginas.
- **CharacterCard**: Componente que muestra la información de un personaje de Amiibo.
- **Favorites**: Página que muestra los personajes favoritos del usuario.
- **Contact**: Página con un formulario de contacto.
- **Home**: Página principal con una imagen de banner.
- **Product**: Página que muestra una lista de personajes de Amiibo.

## Contexto

- **FavoritesContext**: Contexto que maneja el estado de los personajes favoritos.

## Estilos

Los estilos están organizados en módulos CSS para cada componente y página. Por ejemplo, los estilos para el componente `Navbar` se encuentran en `src/components/navbar/Navbar.module.css`.

## API

La aplicación utiliza la API de Amiibo para obtener la lista de personajes. La función `getCharacters` en `src/utils/api.js` se encarga de hacer la solicitud a la API.

## Pruebas

Las pruebas están configuradas con Vitest y se encuentran en el directorio `src/test`. Puedes ejecutar las pruebas con el siguiente comando:
```sh
npx vitest