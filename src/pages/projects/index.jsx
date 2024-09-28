import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProjectIBC from "./ibc";

const Projects = () => {
  const { project } = useParams();

  const projectList = {
    ibc: {
      component: ProjectIBC,
      title: "IBC",
    },
  }

  const ProjectComponent = projectList[project].component || <div>No se seleccionó un proyecto</div>;

  return (
    <div>
      {project ? (
        <>
          <Helmet>
            <title>aRubenDev | Project-{projectList[project].title}</title>
            <meta name="description" content={project} />
            <link rel="canonical" href={`https://arubendev.com/projects/${project}`} />
          </Helmet>

          <ProjectComponent />
        </>
      ) : (
        <>
          <Helmet>
            <title>aRubenDev | Projects</title>
            <meta name="description" content="A list of projects by A. Rubén García" />
            <link rel="canonical" href="https://arubendev.com/projects" />
          </Helmet>
          <h2>No se seleccionó un proyecto</h2>
        </>
      )}
    </div>
  );
};

export default Projects;
