import CirclesContainer from "./components/UI/CursorTrial/CirclesContainer";
import MyFrontendSkills from "./Sections/MyFrontendSkills";
import VideoAndAbout from "./Sections/Title/VideoAndAbout";
import WorkedCompanies from "./Sections/WorkedCompanies";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Title from "./Sections/Title";

const App = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(
    localStorage.getItem("dark-theme-enabled") || false
  );
  useEffect(() => {
    localStorage.setItem(
      "dark-theme-enabled",
      darkThemeEnabled ? darkThemeEnabled.toString() : ""
    );
  }, [darkThemeEnabled]);

  return (
    <div className={"app " + (darkThemeEnabled ? "dark-theme" : "")}>
      <CirclesContainer />
      <Header
        darkThemeEnabled={darkThemeEnabled}
        setDarkThemeEnabled={setDarkThemeEnabled}
      />
      <main className="w-full min-h-screen h-full">
        <Title />
        <Element name="aboutme">
          <VideoAndAbout />
        </Element>
        <MyFrontendSkills />
        <Element name="experience">
          <WorkedCompanies />
        </Element>
      </main>
      <Footer />
    </div>
  );
};

export default App;
