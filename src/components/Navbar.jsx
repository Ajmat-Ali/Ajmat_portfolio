import DeskTopNavbar from "./Navbar/DeskTopNavbar";
import MobileScreenNavbar from "./Navbar/MobileScreenNavbar";

const Navbar = () => {
  return (
    <div>
      <div className="block max-md:hidden">
        <DeskTopNavbar />
      </div>
      <div className="hidden max-md:block">
        <MobileScreenNavbar />
      </div>
    </div>
  );
};

export default Navbar;
