import { SKILL } from "../data/homeData";

const Skill = () => {
  return (
    <div id="skills" className="py-20 border-b border-border-subtle">
      <div className="flex flex-col gap-y-5">
        <p className="font-mono font-[400px] text-sm text-accent uppercase">
          {SKILL.index}
        </p>
        <h1 className="font-bold text-4xl text-text-primary | max-md:text-3xl">
          {SKILL.title}
        </h1>
        <p className="text-text-muted">{SKILL.description}</p>
      </div>
      <div className="mt-13 flex items-stretch gap-x-5 gap-y-5 justify-between flex-wrap | max-lg:flex-col">
        {SKILL.skills.map((skill, index) => {
          const { domain, description, techStack } = skill;
          return (
            <div
              key={index}
              className="flex-1 bg-surface flex flex-col justify-between gap-y-5 py-7 px-5 rounded-lg border border-border-subtle 
              bg-surface hover:border-border-strong"
            >
              <div className="flex flex-col gap-y-3">
                <div className="flex gap-x-3 text-lg items-center">
                  <span className="text-accent  bg-[#0E131F] p-2 rounded-md border border-border-subtle">
                    <domain.icon size={18} />
                  </span>
                  <h3 className="text-md font-semibold font-display">
                    {domain.text}
                  </h3>
                </div>
                <p className="text-[12px] text-text-muted">{description}</p>
                <div className="flex gap-3 flex-wrap">
                  {techStack.map((tech, ind) => {
                    return (
                      <div
                        className="flex items-center gap-x-5 font-[500px] text-mono text-[12px] bg-[#0E131F] px-3 py-2 
                        border border-border-subtle rounded-md | hover:border-accent hover:text-accent"
                      >
                        <span key={ind} className="">
                          {tech.text}
                        </span>
                        {tech.icon && (
                          <span className="text-accent">
                            <tech.icon size={15} />{" "}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between border-t border-border-subtle pt-4">
                <p className="text-[11px] font-mono text-text-muted">
                  {techStack.length} core competencies
                </p>
                <p className="text-[11px] font-mono text-accent">
                  Production-ready
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
