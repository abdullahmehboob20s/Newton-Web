import TokenDistribution from "components/TokenDistribution";
import About from "layouts/About";
import Levels from "layouts/Levels";
import RevivialOfAvalanche from "layouts/RevivialOfAvalanche";
import Unique from "layouts/Unique";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div>
      <div className="header z-10">
        <Navbar />
        <Hero />

        <img
          src="images/header-bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          alt=""
        />
      </div>
      <About />
      <Unique />
      <RevivialOfAvalanche />
      <Levels />
      <TokenDistribution />
    </div>
  );
}

export default App;
