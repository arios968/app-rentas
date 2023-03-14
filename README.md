
![Logo](https://res.cloudinary.com/duvxdk55r/image/upload/v1678826442/Picture2_rrcxk0.png)


# Inmobiliaria MAJ 

Nuestra aplicación es una herramienta digital para conectar arrendadores de las zonas rurales con arrendatarios de inmuebles . Con esta aplicación, los usuarios pueden pubicar y arrendar propiedades fácilmente desde la comodidad de su hogar.


## Authors

- [@Marians Cabana](https://github.com/Marianscabas)
- [@Alejandro Rios](https://github.com/arios968)
- [@Jonathan Blandon](https://github.com/jblandon97)


## API Reference

#### Get all items

```http
 https://console.firebase.google.com/project/sprint-final-b407e/firestore/data/~2Fsprint~2Fproperties?hl=es-419
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `correo` | `string` | **Required**. Correo electrónico de cada usuario que se registra |
| `Nombre` | `string` | **Required**. Nombre del usuario |
| `Telefono` | `string` | **Required**. Teléfono del usuario |
| `Ubicacion-Inmueble` | `Geo-point` | **Required**. Ubicación del inmueble |
| `Tipo de Inmueble` | `string` | **Required**. En esta sección se puede realizar un filtro en cuanto al tipo de inmueble |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Installation

Install my-project with react-vite

```bash
  npm install 
  npm run dev

```
    
## Tech Stack

**Client:**
* React 
* react-context
* vite
 * TailwindCSS
 * SCSS
 * react-google-maps/api 
* react-modal 
* react-toastify

**Server:**
* NodeJS

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
|primary-color | ![#097ab2](https://via.placeholder.com/10/097ab2?text=+)#097ab2 |
| dark-blue | ![#06689a](https://via.placeholder.com/10/06689a?text=+) #f8f8f8 |
| yellow-light | ![#f4cc9c](https://via.placeholder.com/10/f4cc9c?text=+) #00b48a |
| gray-medium | ![#6c7c9c](https://via.placeholder.com/10/6c7c9c?text=+) #00d1a0 |


## Appendix

> Este aplicativo fue realizado con la intencion de presentarlo en el demoday de la corporacion Makaia para el bootcamp de desarrollo web front-end cohorte 2  del 22 de marzo del año 2023


## Documentation

[Mozilla dev](https://developer.mozilla.org/es/)


[React](https://es.reactjs.org/docs/add-react-to-a-website.html)

[TailwindCSS](https://tailwindcss.com/docs/installation)


## Screenshots

![App Screenshot](https://res.cloudinary.com/duvxdk55r/image/upload/v1678831044/WhatsApp_Image_2023-03-14_at_4.51.46_PM_m7rddn.jpg)

