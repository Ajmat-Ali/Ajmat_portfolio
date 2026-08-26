import React from "react";

const Contacts = () => {
  return (
    <div
      id="contact"
      className="scroll-mt-24 py-20 border-b border-border-subtle"
    >
      <div className="flex flex-col gap-y-5">
        <p className="font-mono font-[400px] text-sm text-accent uppercase">
          {"05"}
        </p>
        <h1 className="font-bold text-4xl text-text-primary | max-md:text-3xl">
          {"Let's contact"}
        </h1>
        <p className="text-text-muted">{"Coming soon ---"}</p>
      </div>
      <div className="mt-13 flex items-stretch gap-x-5 gap-y-5 justify-between flex-wrap | max-lg:flex-col"></div>
    </div>
  );
};

export default Contacts;
