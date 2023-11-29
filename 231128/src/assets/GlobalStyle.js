import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* reset는 가장 상단에 작성 */
${reset}

/* font-family: 'Noto Sans KR', sans-serif; */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600&display=swap');

body{
  font-family: 'Noto Sans KR', '나눔고딕', '맑은 고딕', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
}

a{
  color: inherit;
  text-decoration: none;
}

img {
  vertical-align: top;
}

`;

export default GlobalStyle;
