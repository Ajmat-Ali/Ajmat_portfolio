import MobileScreenNavbar from "../components/Navbar/MobileScreenNavbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <div className=" bg-[#0B0F19] text-white pb-20">
      <div className="bg-surface sticky top-0 z-99">
        <Navbar />
      </div>
      <div className="w-[80%]  m-auto max-lg:w-[95%] ">
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Journey />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
