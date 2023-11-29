import TitleBox from "../components/TitleBox";
import Agency from "../components/Agency";
import Slide from "../components/Slide";
import mainStyle from "../styles/Main.module.css";
import AgencyUseEffect from "../components/AgencyUseEffect";
import FramerMotion from "../components/FramerMotion";

const Main = () => {
  return (
    <main className={mainStyle.container}>
      <TitleBox />
      <FramerMotion />
      <Agency />
      <AgencyUseEffect />
      <Slide />
    </main>
  );
};

export default Main;
