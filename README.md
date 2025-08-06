# Mi Portafolio Web — Luis Asluis

Este es mi portafolio personal desarrollado con **React**, **TypeScript**, **Vite** y **Tailwind CSS**. Aquí muestro mis habilidades, proyectos y formas de contacto, con soporte para español e inglés.

## 🚀 Tecnologías principales

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) (formulario de contacto)
- [i18next](https://www.i18next.com/) (internacionalización)
- [AOS](https://michalsnik.github.io/aos/) (animaciones al hacer scroll)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (notificaciones)

## ✨ Funcionalidades

- Diseño responsive (adaptable a móvil y escritorio)
- Modo oscuro y claro
- Animaciones suaves al hacer scroll
- Formulario de contacto funcional (EmailJS)
- Notificaciones amigables (React Toastify)
- Internacionalización: Español e Inglés
- Accesibilidad y buenas prácticas de SEO

## 📦 Instalación y uso local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/mi-portafolio.git
   cd mi-portafolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con tus claves de EmailJS:
   ```
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🛠️ Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Genera la versión de producción en `/dist`
- `npm run preview` — Previsualiza la versión de producción localmente

## 🌐 Despliegue en Netlify

1. Asegúrate de tener el archivo `_redirects` en la carpeta `public` con el siguiente contenido:
   ```
   /*    /index.html   200
   ```
2. Configura tus variables de entorno en Netlify (las mismas que en `.env`).
3. El directorio de publicación es `dist`.

## 📄 Licencia

Este proyecto es de uso personal. Puedes usarlo como referencia para tus propios proyectos.

---

¡Gracias por visitar mi portafolio!  
Si tienes alguna pregunta o propuesta, no dudes en contactarme a través del formulario del sitio.