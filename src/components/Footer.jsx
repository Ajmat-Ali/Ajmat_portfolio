import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../data/contactData";
import { LuCopyright } from "react-icons/lu";

export const Footer = () => {
  const { developerProfile } = CONTACT;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#1E2638] bg-[#0E131F] py-8 text-xs font-mono text-[#8B93A7]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left copyright notice */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          <span className="text-[#E4E7EC] flex gap-1 items-center-">
            <LuCopyright size={14} /> <span>2026 {developerProfile.name}</span>
          </span>
          <span className="text-[#1E2638]">|</span>
          <span>Built with React & Tailwind CSS</span>
        </div>

        {/* Right links and back to top */}
        <div className="flex items-center gap-5">
          <a
            href={developerProfile.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#8B93A7] hover:text-[#3ECF8E] transition-colors flex items-center gap-1"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={developerProfile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#8B93A7] hover:text-[#3ECF8E] transition-colors flex items-center gap-1"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-1.5 rounded bg-[#131826] border border-[#1E2638] hover:border-[#3ECF8E] text-[#8B93A7] hover:text-[#3ECF8E] transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
