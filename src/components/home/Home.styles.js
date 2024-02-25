import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 25;
  margin-bottom: 2em auto; // for header

  // justify-content: space-between;
  justify-content: space-evenly;
  width: 100%;
  height: 3em;
  background-color: black;
`;

export const OurHerosName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  color: white;
`;

export const HeaderLinksDiv = styled.div`
  display: flex;
  width: 50%;
`;
export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
`;

export const PageRefIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: white;
`;

export const Links = styled.div`
  display: flex;
  font-size: 18px;
  color: white;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  // margin: 2em auto; // for header

  width: 100%;
  height: 100vh;
  background-color: cyan;
`;
