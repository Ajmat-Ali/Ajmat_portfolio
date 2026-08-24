import MobileScreenNavbar from "../components/Navbar/MobileScreenNavbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className=" bg-[#0B0F19] text-white pb-20">
      <div className="bg-surface sticky top-0">
        <Navbar />
      </div>
      <div className="w-[80%]  m-auto max-lg:w-[95%] ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
