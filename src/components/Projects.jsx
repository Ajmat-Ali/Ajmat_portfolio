import ProjectCard from "./ProjectCard";
import { PROJECT } from "../data/projectData";

const Projects = () => {
  return (
    <div
      id="projects"
      className="scroll-mt-24 py-20 border-b border-border-subtle"
    >
      <div className="flex flex-col gap-y-5">
        <p className="font-mono font-[400px] text-sm text-accent uppercase">
          {PROJECT.index}
        </p>
        <h1 className="font-bold text-4xl text-text-primary | max-md:text-3xl">
          {PROJECT.title}
        </h1>
        <p className="text-text-muted">{PROJECT.description}</p>
      </div>
      <div className="mt-13 space-y-12 ">
        {PROJECT.projects.map((project, index) => {
          return <ProjectCard key={index} project={project} index={index} />;
        })}
        {/* <ProjectCard project={PROJECT.projects[0]} index={0} /> */}
      </div>
    </div>
  );
};

export default Projects;
