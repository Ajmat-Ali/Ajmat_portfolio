import { Database, ExternalLink, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="rounded-xl bg-[#131826] border border-[#1E2638] overflow-hidden hover:border-[#2A354E] transition-all duration-200">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 items-stretch- items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
      >
        <div
          className={` lg:col-span-7 justify-center bg-[#0E131F] border-b lg:border-b-0 ${
            isEven
              ? "lg:border-r border-[#1E2638]"
              : "lg:order-2 lg:border-l border-[#1E2638]"
          } flex flex-col justify-between- overflow-hidden relative group`}
        >
          <div className="px-4 py-2.5 bg-[#0B0F19] border-b border-[#1E2638] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/70" />
              <div className="ml-2 px-3 py-0.5 rounded bg-[#131826] border border-[#1E2638] text-[11px] font-mono text-[#8B93A7] truncate max-w-[200px] sm:max-w-xs">
                <a
                  href={project.liveUrl}
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.liveUrl}
                </a>
              </div>
            </div>
          </div>

          <div className="">
            <img
              className="w-full h-auto object-cover rounded-b-lg"
              src={project.project_preview}
              alt="Libro-desktop-dashboard"
              loading="lazy"
            />
          </div>
        </div>

        {/* =================================== Project Content Description Side  ========================*/}
        <div
          className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
            isEven ? "" : "lg:order-1"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#3ECF8E]">
                Project 0{index + 1}
              </span>
              <span className="text-xs font-mono text-[#8B93A7]">
                {project.role}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl text-[#E4E7EC] mb-2 tracking-tight">
              {project.title}
            </h3>

            <p className="text-xs font-mono text-[#8B93A7] mb-4">
              {project.tagline}
            </p>

            <p className="text-sm text-[#8B93A7] leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="p-3 rounded bg-[#0E131F] border border-[#1E2638] mb-6">
              <div className="flex items-start gap-2 text-xs">
                <Database className="w-3.5 h-3.5 text-[#3ECF8E] mt-0.5 shrink-0" />
                <span className="text-[#8B93A7] leading-snug">
                  <strong className="text-[#E4E7EC] font-medium">
                    Technical Decision:{" "}
                  </strong>
                  {project.challengeSolved}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#0E131F] border border-[#1E2638] text-[#E4E7EC]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1E2638] flex flex-wrap items-center gap-3 | max-sm:justify-around">
            <a href={project.liveUrl} target="_blank">
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                className="px-4 py-2 rounded bg-[#3ECF8E] text-[#0B0F19] hover:bg-[#34b77c] font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </a>

            <a
              href={project.githubUrl_fe}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded bg-[#0E131F] border border-[#1E2638] hover:border-[#3ECF8E] text-[#E4E7EC] hover:text-[#3ECF8E] text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>UI Repo</span>
            </a>
            <a
              href={project.githubUrl_be}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded bg-[#0E131F] border border-[#1E2638] hover:border-[#3ECF8E] text-[#E4E7EC] hover:text-[#3ECF8E] text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>Server Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
