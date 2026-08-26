import { useCallback, useState } from "react";
import { NAME, LOGO, NAV_LIST } from "../../data/homeData";
import { COLORS } from "../../theme/global.theme";
import { Menu, X } from "lucide-react";
import handleResumeClick from "../../utils/resumeDownload";
import { CONTACT } from "../../data/contactData";

const MobileScreenNavbar = () => {
  const [openItems, setOpenItems] = useState(false);

  const toggleButton = () => {
    setOpenItems((pre) => !pre);
  };

  return (
    <nav>
      <div className=" flex justify-between items-center flex-wrap p-5 m-auto">
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

        <div
          onClick={toggleButton}
          className={`border px-1 py-1 text-sm text-[#8B93A7] bg-[#131826]  cursor-pointer rounded-sm`}
        >
          {!openItems ? <Menu size={20} /> : <X size={20} />}
        </div>
      </div>
      {openItems ? (
        <div className="py-7 ">
          <ul
            className="flex flex-col flex-wrap gap-y-7 text-[14px] font-semibold leading-[20px] 
        "
          >
            {NAV_LIST.map((ele, ind) => {
              return (
                <a
                  href={ele.link}
                  className=""
                  onClick={() => setOpenItems(false)}
                >
                  <li
                    key={ind}
                    className={`text-[#8B93A7] hover:text-[#E4E7EC] cursor-pointer border-b-2 border-[#151B2A] 
                  pb-2 w-[90%] m-auto`}
                  >
                    {ele.name}
                  </li>
                </a>
              );
            })}
          </ul>
          <a
            href={CONTACT.developerProfile.resume}
            target="_blank"
            onClick={handleResumeClick}
          >
            <div
              className={` px-3 py-1 text-sm  text-accent 
              cursor-pointer rounded-sm`}
            >
              <button
                className="font-mono text-accent hover:bg-accent hover:text-bg-dark py-2 mt-4 w-[90%]
             border block m-auto rounded-md"
              >
                View Resume
              </button>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default MobileScreenNavbar;
