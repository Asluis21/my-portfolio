import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  description: string;
  image?: string;
  gitHubLink?: string;
  projectLink?: string;
  gitHubLinkBackend?: string;
  gitHubLinkFrontend?: string;
}

export default function ProjectCard({ title, description, image, gitHubLink, projectLink, gitHubLinkBackend, gitHubLinkFrontend }: Props) {
  
  const { t } = useTranslation();
  
  return (
    <div className="dark:bg-[#27272a] bg-white rounded-lg shadow-xl p-6 flex flex-col items-center w-full max-w-xs">
      <h3 className="dark:text-white text-xl mb-2 text-center">{title}</h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-contain rounded mb-4" />
      )}

      { gitHubLink &&
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="mb-2 px-4 py-2 bg-buttonPrimary text-white rounded hover:bg-buttonPrimaryHover transition w-full text-center">{t('projects.viewProject')}</a>
      }
      
      {projectLink && (
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="mb-2 px-4 py-2 bg-buttonPrimary text-white rounded hover:bg-buttonPrimaryHover transition w-full text-center">{t('projects.viewDemo')}</a>
      )}
      {gitHubLinkBackend && (
        <a href={gitHubLinkBackend} target="_blank" rel="noopener noreferrer" className="mb-2 px-4 py-2 bg-buttonPrimary text-white rounded hover:bg-buttonPrimaryHover transition w-full text-center">{t('projects.viewBackend')}</a>
      )}
      {gitHubLinkFrontend && (
        <a href={gitHubLinkFrontend} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-buttonPrimary text-white rounded hover:bg-buttonPrimaryHover transition w-full text-center">{t('projects.viewFrontend')}</a>
      )}
    </div>
  )
}