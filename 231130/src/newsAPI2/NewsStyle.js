import styled from "styled-components";

// NewsNav
export const NewsNavi = styled.div`
  ul {
    margin: 20px 5px;
    display: flex;
    justify-content: space-around;

    li {
      /* box-sizing: border-box; */
      margin: 0 auto;
      padding: 15px 20px;
      font-weight: bold;
      border-bottom: 1px solid #fff;
      &:hover {
        background-color: aqua;
        border-bottom: 1px solid #000;
      }
      a {
        margin: 0;
      }
    }
  }
`;

//News all
export const NewsLi = styled.div`
  ul {
    width: 70%;
    margin: 0 auto;
    li {
      margin: 20px;
    }
  }
`;
