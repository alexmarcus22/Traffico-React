import "./Assets/Sass/_global.scss";
import "aos/dist/aos.css";
import HeroComponent from "./Components/Hero";
import Features from "./Components/Features";
import Illustration1 from "./Assets/Images/illustration1.svg";
import Illustration2 from "./Assets/Images/illustration2.svg";

function App() {
  return (
    <div className="App">
      <div className="main-section">
        <HeroComponent />
        <Features
          titlu="ABOUT US"
          description="The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. "
          positionText="left"
          body="How do you do when you need to obtain a commercial traffic permit for freight transport to your business?"
          img={Illustration1}
        />
        <Features
          titlu="HOW TO APPLY"
          description="When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO."
          positionText="right"
          img={Illustration2}
        />
      </div>
    </div>
  );
}

export default App;
