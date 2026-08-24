import MobileScreenNavbar from "../components/Navbar/MobileScreenNavbar";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" bg-[#0B0F19] text-white h-200">
      <div className="bg-surface sticky top-0">
        <Navbar />
      </div>
      <div className="max-w-[80%]  m-auto "></div>
    </div>
  );
};

export default Home;
