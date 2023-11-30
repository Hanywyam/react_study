import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
${reset}

a{
  display: block;
  width: 100%;
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
}
img {
  vertical-align: top;
  object-fit: cover;
  width: 280px;
  height: 150px;
}
    li {
      overflow: hidden;
      display: flex;
      line-height: 1.6;
      strong {
        font-weight: bold;
      }
    }
`;

export default Globalstyle;
