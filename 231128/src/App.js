import "./App.css";
import GlobalStyle from "./assets/GlobalStyle";
import API1 from "./components/API1";
import Pixabay1 from "./components/Pixabay1";
import UseCallback1 from "./components/UseCallback1";
import Gallery from "./gallery/Gallery";

function App() {
  return (
    <>
    {/* styled-components가 갖고 있는 { createGlobalStyle } 기본값
      : GlobalStyle == 최상위 컴포넌트에 적용 */}
      <GlobalStyle />
      {/*<UseCallback1 />*/}
      {/* <API1 /> */}
      {/* <Pixabay1 /> */}
      <Gallery />
    </>
  );
}

export default App;
