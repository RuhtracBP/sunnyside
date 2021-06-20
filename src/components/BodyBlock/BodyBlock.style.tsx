import styled from "@emotion/styled";

export const Container = styled("div")`
  width: 100vw;
  height: auto;
  border: none;
  margin: 0;
  padding: 0;
`;

export const Image = styled("img")`
  width: 100%;
  height: auto;
`;

export const TextContainer = styled("div")`
  text-align: center;
  color: black;
  margin: 5rem 3rem;
  h2 {
    font-family: "fraunces";
    font-weight: 900;
    font-size: 2rem;
  }
  p {
    font-family: "barlow";
    color: hsl(210, 4%, 67%);
    font-size: 1.2rem;
    letter-spacing: 0.12rem;
    line-height: 1.75rem;
    margin-bottom: 2.5rem;
  }
  a {
    font-family: "fraunces";
    font-weight: 700;
    font-size: 1.2rem;
  }
  a::after {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(51, 100%, 79%);
    border-radius: 10px;
    width: 10rem;
    height: 0.7rem;
    margin: 0 auto;
    bottom: 10px;
    position: relative;
    z-index: -1;
  }
`;
