import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 0.7fr;
  grid-template-rows: 0.7fr 0.5fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . ."
    ". header header header ."
    ". skills0 skills1 skills2 ."
    ". skills3 skills3 skills3 ."
    ". . . . .";
  background: #2b2b2b;
  // background: #121212;
  background-opacity: 0.5;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  // background-color: grey;
`;

export const Skills0 = styled.div`
  grid-area: skills0;
  background-color: blue;
`;

export const Skills1 = styled.div`
  grid-area: skills1;
  background-color: green;
`;

export const Skills2 = styled.div`
  grid-area: skills2;
  background-color: purple;
`;

export const Skills3 = styled.div`
  grid-area: skills3;
  background-color: navy;
`;
