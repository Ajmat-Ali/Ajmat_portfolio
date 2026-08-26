import { Code, Compass, GraduationCap } from "lucide-react";
import { JOURNEY } from "../data/journeyData";

const Journey = () => {
  const getIcon = (type) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-[#3ECF8E]" />;
      case "stack":
        return <Code className="w-4 h-4 text-[#3ECF8E]" />;
      case "focus":
        return <Compass className="w-4 h-4 text-[#FFB454]" />;
      default:
        return null;
    }
  };

  return (
    <div
      id="journey"
      className="scroll-mt-24 py-20 border-b border-border-subtle"
    >
      <div className="flex flex-col gap-y-5">
        <p className="font-mono font-[400px] text-sm text-accent uppercase">
          {JOURNEY.index}
        </p>
        <h1 className="font-bold text-4xl text-text-primary | max-md:text-3xl">
          {JOURNEY.title}
        </h1>
        <p className="text-text-muted">{JOURNEY.description}</p>
      </div>
      <div className="mt-13 flex items-stretch gap-x-5 gap-y-5 justify-between flex-wrap | max-lg:flex-col">
        <div className="relative pl-6 sm:pl-8 border-l border-[#1E2638] space-y-12 max-w-4xl">
          {JOURNEY.journeyTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[35px] sm:-left-[42px] top-1.5 w-6 h-6 rounded-full bg-[#131826] border border-[#1E2638] group-hover:border-[#3ECF8E] flex items-center justify-center transition-colors">
                {getIcon(item.type)}
              </div>

              <div className="rounded-lg bg-[#131826] border border-[#1E2638] p-6 group-hover:border-[#2A354E] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-[#3ECF8E] font-medium bg-[#0E131F] px-2.5 py-1 rounded border border-[#1E2638]">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-[#8B93A7]">
                    {item.institutionOrRole}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#E4E7EC] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#8B93A7] leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1E2638]/60">
                  {item?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#0E131F] border border-[#1E2638] text-[#8B93A7] group-hover:text-[#E4E7EC] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
