

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Spotify Playlist Management",
    description: "Desarrollé una aplicación con Angular 17 para gestionar listas de reproducción de Spotify utilizando la API de Spotify.",
    image: "https://raw.githubusercontent.com/Asluis21/my-portfolio/main/public/vite.svg", // Cambia esto por la URL de tu imagen
    link: "https://github.com/Asluis21/spotify-playlist-management",
  },
  // Puedes agregar más proyectos aquí
];

export default function Projects() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded mb-4 border"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
            <p className="mb-4 text-gray-700 text-center">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-auto"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}