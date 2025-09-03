import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <MainSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven/>
      
      {/* Other sections will go here: SectionTwo, SectionThree, etc. */}
    </div>
  );
}

export default App;
