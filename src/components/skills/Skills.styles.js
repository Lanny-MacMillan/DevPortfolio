import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  height: 120vh;
  color: white;
  border: 1px solid red;

  // margin: 2em auto; // for header
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
  background: #1a191d;

  @media only screen and (min-width: 320px) and (max-width: 520px) {
    height: auto;
    grid-template-columns:  1fr;
    grid-template-rows: 0.3fr 0.5fr 1fr 1fr 1fr 1fr .7fr;
    grid-template-areas:
    ". "
    "header"
    "skills0"
    "skills1"
    "skills2"
    "skills3"
    ".";
}

  @media only screen and (min-width: 520px) and (max-width: 992px) {
    height: auto;
    padding: 0 20px 0 20px;
    grid-template-columns:  1fr;
    grid-template-rows: 0.7fr 0.5fr 1fr 1fr 1fr 1fr .7fr;
    grid-template-areas:
    ". "
    "header"
    "skills0"
    "skills1"
    "skills2"
    "skills3"
    ".";
}

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: 130vh;
    padding: 0 20px 0 20px;

    grid-template-columns:  1fr 1fr;
    grid-template-rows: 0.7fr 0.5fr 1fr 1fr .7fr;
    grid-template-areas:
    ". . "
    "header header"
    "skills0 skills1"
    "skills2 skills3"
    ". .";
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.5em;
  font-weight: 800;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  padding-bottom: 30px;
`;

export const Skills0 = styled.div`
  grid-area: skills0;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  border-right: none;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;
    border-right: 2px solid white;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;
    border-right: 2px solid white;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {

  }
`;

export const SkillsHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 28px;
  font-weight: 900;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 25%;
  // border: 1px solid red;
`;

export const ColorAccent = styled.div`
  position: absolute;
  margin-bottom: 18px;
  z-index: -1;
  width: ${(props) => (props.width ? props.width : "125px")};
  background: ${(props) => (props.background ? props.background : "red")};
  height: 10px;
`;

export const Title = styled.div`
  display: flex;
  z-index: 5;
  width: 100%;
  align-items: center;
  padding-left: 10px;
`;

export const DescriptionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 30px;
`;

export const Description = styled.div`
  padding: 10px;
  // border: 2px solid yellow;
`;

export const HTMLSnippet = styled.div`
  padding: 15px;
  // display: flex;
  // flex-direction: column;
  height: 100%;
  // width: 10%;
  border: 2px solid yellow;
`;

export const Skills1 = styled.div`
  grid-area: skills1;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  // outline-style: solid none;
  // background-color: green;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;
    border-top: none;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;
    border-top: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {

  }
`;

export const Skills2 = styled.div`
  grid-area: skills2;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  border-left: none;
  // background-color: purple;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;
    border-left: 2px solid white;
    border-top: none;
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;
    border-left: 2px solid white;
    border-top: none;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    border-left: 2px solid white;
    border-right: none;
    border-top: none;

  }
`;

export const Skills3 = styled.div`
  grid-area: skills3;
  padding: 60px;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border: 2px solid white;
  border-top: none;
  // background-color: navy;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin: 0 20px 0 20px;

  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    margin: 0 10px 0 10px;

  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {

  }
`;
