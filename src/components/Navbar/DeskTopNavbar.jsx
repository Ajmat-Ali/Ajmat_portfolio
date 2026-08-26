import { useState } from "react";
import { NAME, LOGO, NAV_LIST } from "../../data/homeData";
import { COLORS } from "../../theme/global.theme";
import { ArrowUpRight, SquareText } from "lucide-react";
import { useActiveSection } from "../../hook/useActiveSection";

import handleResumeClick from "../../utils/resumeDownload";
import { CONTACT } from "../../data/contactData";

const DeskTopNavbar = () => {
  const [active, setActive] = useState(0);
  const sectionIds = NAV_LIST.map((item) => item.link.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      className=" flex justify-between items-center flex-wrap p-5 w-[80%] m-auto
     | max-lg:w-[95%]"
    >
      <div className="group flex gap-x-3 items-center cursor-pointer">
        <p
          className={`text-accent font-mono font-[600] text-[18px] bg-[#131826] px-2 py-1 
          border-2 border-gray-800 group-hover:border-accent-hover rounded-md`}
        >
          {" "}
          {LOGO}{" "}
        </p>
        <div className="flex items-center gap-x-2 ">
          <p className="font-display font-[700] text-[18px]"> {NAME}</p>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>{" "}
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-5 text-[14px] font-semibold leading-[20px] ">
        {NAV_LIST.map((ele, ind) => {
          const id = ele.link.replace("#", "");
          const isActive = activeId === id;
          return (
            <a key={ind} href={ele.link} className="scroll-mt-24">
              <li
                key={ind}
                onClick={(e) => {
                  setActive(ind);
                }}
                className={`text-[#8B93A7] hover:text-[#E4E7EC] cursor-pointer `}
                style={{
                  // color: ind === active ? COLORS["primary"] : undefined,
                  color: isActive ? COLORS["primary"] : undefined,
                }}
              >
                {ele.name}

                <span
                  className={`h-[1.5px] w-full  bg-[#3ECF8E] ${isActive ? "block" : ""}`}
                ></span>
              </li>
            </a>
          );
        })}
      </ul>
      <div>
        <a
          href={CONTACT.developerProfile.resume}
          target="_blank"
          onClick={handleResumeClick}
        >
          <div
            className={`flex items-center gap-2 border px-3 py-1 text-sm font-mono text-accent bg-bg-dark hover:bg-accent hover:text-bg-dark cursor-pointer rounded-sm`}
          >
            <SquareText size={14} />
            {"Resume"}
            <ArrowUpRight size={14} />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default DeskTopNavbar;
