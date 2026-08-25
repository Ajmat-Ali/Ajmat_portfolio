import { ABOUT_ME } from "../data/homeData";

const About = () => {
  return (
    <div className="flex py-20 justify-between max-md:flex-col gap-y-10">
      <div className="flex flex-col flex-1  gap-y-5 ">
        <p className="font-mono font-[400px] text-sm text-accent uppercase">
          {ABOUT_ME.index}
        </p>
        <h1 className="font-bold text-4xl text-text-primary | max-md:text-3xl">
          {ABOUT_ME.title}
        </h1>
        <div className="text-md text-text-muted text-left flex flex-col gap-y-5">
          <p>
            I began my software journey during my{" "}
            <span className="text-text-primary">
              Bachelor of Computer Applications (BCA)
            </span>
            , where I developed a strong foundation in data structures,
            relational databases, and computer systems. Moving into web
            engineering, I specialized in the MERN stack to build practical,
            production-ready applications from the ground up.
          </p>
          <p>
            Right now, I spend my time split between architecting full-stack web
            applications and sharpening my{" "}
            <span className="text-text-primary">
              DSA and System Design fundamentals
            </span>
            . I care deeply about clean API contracts, efficient database
            indexing, and predictable client-side state.
          </p>
          <p>
            I enjoy tackling end-to-end engineering challenges — whether that is
            preventing race conditions during checkout transactions or
            optimizing complex MongoDB aggregation pipelines for instant search
            responses.
          </p>
        </div>
        <div className="flex justify-around font-mono text-text-primary  text-[12px] flex-wrap gap-y-5 | max-md:text-sm">
          {ABOUT_ME.tags.map((tag) => {
            const Icon = tag.icon;
            return (
              <div className="flex gap-x-5 bg-surface px-5 py-3 rounded-md border border-border-subtle">
                <span className="text-accent">
                  <Icon size={20} />
                </span>
                <span>{tag.text}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 ">
        <div className="border border-border-subtle bg-surface w-[70%] py-3 px-4 m-auto | max-xl:w-[90%] } max-md:w-full">
          <h2 className="font-mono text-sm text-text-muted border-b- border-border-subtle py-4 ">
            {ABOUT_ME.card.cardTitle}
          </h2>
          <div>
            {ABOUT_ME.card.stats.map((stat) => {
              return (
                <div className="flex justify-between py-4 text-sm text-text-muted border-t border-border-subtle">
                  <p>{stat.title}</p>
                  <p className="text-accent font-bold">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <p className="text-[12px] font-mono text-text-muted bg-[#0E131F] p-4">
            <span className="text-accent fong-semi-bold">
              {ABOUT_ME.card.goal.title}{" "}
            </span>
            {ABOUT_ME.card.goal.data}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
