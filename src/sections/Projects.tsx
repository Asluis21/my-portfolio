import ProjectCard from '../components/ProjectCard';
import spotifyPlaylistManagementImage from '../assets/spotify-playlist-management-project-image.png';
import taskListImage from '../assets/task-list-project-image.png';
import warehouseImage from '../assets/warehouse-management-image.jpg';
import { useTranslation } from 'react-i18next';

type Props = {}

export default function Projects({ }: Props) {

  const { t } = useTranslation();

  return (
      <section id='projects' className="bg-projectsBg dark:bg-projectsBgDarkMode p-5">
        <h2 className="text-3xl my-8 dark:text-white">{t('projects.title')}</h2>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center'>
          <li data-aos="zoom-in">
            <ProjectCard
              title={t('projects.spotifyPlaylistManagement.title')}
              description={t('projects.spotifyPlaylistManagement.description')}
              image={spotifyPlaylistManagementImage}
              gitHubLink="https://github.com/Asluis21/spotify-playlist-management-app"
              projectLink="https://sptfy-playlist-management.netlify.app/start"
            />
          </li>
          
          <li data-aos="zoom-in">
            <ProjectCard
              title={t('projects.taskListApp.title')}
              description={t('projects.taskListApp.description')}
              image={taskListImage}
              gitHubLinkBackend="https://github.com/Asluis21/TaskList-Spring-Boot"
              gitHubLinkFrontend="https://github.com/Asluis21/TaskList-Angular"
            />
          </li>

          <li data-aos="zoom-in">
            <ProjectCard
              title={t('projects.warehouseManagement.title')}
              description={t('projects.warehouseManagement.description')}
              image={warehouseImage}
              gitHubLinkBackend="https://github.com/Asluis21/Gestion-almacen-Spring-Boot"
              gitHubLinkFrontend="https://github.com/Asluis21/Gestion-almacen-Angular/tree/main"
            />
          </li>

        </ul>
      </section>
  )
}