import styled from "styled-components";
import { desktop } from '../components/assets/breakpoints'

export const ProjectsContainer = styled.div`
  font: 1em/1.618 Inter, sans-serif;
  display: flex;
  // margin: 2em auto; // for header
  flex-direction: column;
  min-height: 230vh;
  padding: 30px;
  margin: 0;
  // border: 1px solid white;
  color: #224;
  background: #1a191d;
  // background: #2b2b2b;
  // background: url(https://source.unsplash.com/E8Ufcyxz514/2400x1823) center /
    // cover no-repeat fixed;
`;

export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: .5fr 1fr 1fr 1fr .5fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 60px 60px;
  grid-template-areas:
    ". projectOne projectTwo projectTwo ."
    ". projectThree projectThree projectFour ."
    ". projectThree projectThree projectFive ."
    ". projectSix projectSeven projectEight .";

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    gap: 30px 30px;
    grid-template-areas:
      "projectOne"
      "projectTwo"
      "projectThree" 
      "projectFour"
      "projectFive"
      "projectSix"
      "projectSeven"
      "projectEight";

  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    gap: 30px 30px;
    grid-template-areas:
      "projectOne"
      "projectTwo"
      "projectThree" 
      "projectFour"
      "projectFive"
      "projectSix"
      "projectSeven"
      "projectEight";

  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    gap: 30px 30px;
    grid-template-areas:
      "projectOne projectTwo projectTwo"
      "projectThree projectThree projectFour"
      "projectFive projectSix projectSix"
      "projectSeven projectSeven projectEight";
  }

  /* @media only screen and (min-width: 1200px) {
    /* grid-template-columns: 1fr 1fr 1fr ;
    gap: 30px 30px;
    grid-template-areas:
      "projectOne projectTwo projectTwo"
      "projectThree projectThree projectFour"
      "projectThree projectThree projectFive"
      "projectSix projectSeven projectEight"; */
  /* } */
`;

export const ProjectOne = styled.div`
  grid-area: projectOne;
`;
export const ProjectTwo = styled.div`
  grid-area: projectTwo;
`;
export const ProjectThree = styled.div`
  grid-area: projectThree;
`;
export const ProjectFour = styled.div`
  grid-area: projectFour;
`;
export const ProjectFive = styled.div`
  grid-area: projectFive;
`;
export const ProjectSix = styled.div`
  grid-area: projectSix;
`;
export const ProjectSeven = styled.div`
  grid-area: projectSeven;
`;
export const ProjectEight = styled.div`
  grid-area: projectEight;
`;

//  Card Two - Nuemorphism UI Design
export const ProjectCard2 = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 0 30px 0 30px;
  transition: 0.5s;
`;

export const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
  }
  &:hover {
    transform: translateY(-50px);
  }
`;

export const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ContentH2 = styled.div`
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.1);
`;

export const ContentH3 = styled.div`
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
`;

export const ContentP = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
`;

export const ContentA = styled.div`
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: #2196f3;
  // background: #e91e63;
  // background: #23c186;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
  }
`;

export const SkillsDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  width: 85%;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.5em;
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  padding-bottom: 30px;
  color: white;
`;

//  Card Three - Project UI Display
// export const ProjectCard = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   // max-width: ${(props) => (props.maxWidth ? props.maxWidth : "420px")};
//   // height: ${(props) => (props.height ? props.height : "440px")};
//   box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
//     inset -5px -5px 15px rgba(255, 255, 255, 0.1),
//     5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
//   border-radius: 15px;
//   overflow: hidden;
//   transition: all 0.4s ease-in-out;
//   }
// `;

export const ProjectCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  height: ${(props) => (props.height ? props.height : "440px")};
`;

export const ProjectCardContainerWide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  height: ${(props) => (props.height ? props.height : "440px")};
`;
export const ProjectCardContainerLarge = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  height: ${(props) => (props.height ? props.height : "440px")};
`;
export const Image = styled.img`
  // width: 100%;
  display: block;
  max-width: 100%;
  z-index: 10;
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  /* height: ${(props) => (props.height ? props.height : "60%")}; */
  border-radius: 15px 15px 0px 0px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  // border: 1px solid blue;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* bottom: ${(props) => (props.bottom ? props.bottom : "152px")}; */

  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    height: ${(props) => (props.height ? props.height : "100%")};
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: ${(props) => (props.height ? props.height : "100%")};
  }
`;
export const ImageWide = styled.img`
  // width: 100%;
  display: block;
  max-width: 100%;
  z-index: 10;
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  height: ${(props) => (props.height ? props.height : "60%")};
  border-radius: 15px 15px 0px 0px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;

  // border: 1px solid blue;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* bottom: ${(props) => (props.bottom ? props.bottom : "152px")}; */
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    height: ${(props) => (props.height ? props.height : "100%")};
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: ${(props) => (props.height ? props.height : "100%")};
  }
`;
export const ImageLarge = styled.img`
  // width: 100%;
  display: block;
  max-width: 100%;
  z-index: 10;
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  height: ${(props) => (props.height ? props.height : "60%")};
  border-radius: 15px 15px 0px 0px;
  transition: all 0.4s ease-in-out;
  overflow: hidden;

  // border: 1px solid blue;
  @media only screen and (min-width: 320px) and (max-width: 600px) {
    /* bottom: ${(props) => (props.bottom ? props.bottom : "152px")}; */

  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {

  }
  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    height: ${(props) => (props.height ? props.height : "100%")};

  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 40%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 15px 15px;
  /* border: 1px solid blue; */
`;
export const FooterWide = styled.div`
  width: 100%;
  z-index: 1;
    /* height: "200px"; */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 15px 15px;
  // border: 1px solid blue;
`;
export const FooterLarge = styled.div`
  width: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 15px 15px;
  // border: 1px solid blue;
  height: 40%;
`;
export const Title = styled.div`
  // display: flex;
  // z-index: 5;
  width: 100%;
  font-weight: 500;
  font-size: 1.2em;
  display: flex;
  z-index: 5;
  height: 20%;
  padding: ${(props) => (props.padding ? props.padding : "10px 30px 0px 30px")};
  // padding: 10px 30px 0px 30px;
  color: white;
  font-family: "DM Sans", sans-serif;
  align-items: center;
  /* border: 1px solid green; */
`;

export const Description = styled.div`
  font-size: .8em;
  display: flex;
  min-height: 50%;
  color: white;
  padding: 0px 20px 0px 30px;
  align-items: center;
  // border: 1px solid orange;
`;
export const Stack = styled.div`
  font-size: 14px;
  display: flex;
  height: 15%;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  // border: 1px solid red;
  &:hover:span {
    display: none;
  }
`;

export const ColorAccent = styled.div`
  position: absolute;
  // style set for 1200 ss
  bottom: ${(props) => (props.bottom ? props.bottom : "140px")}; 
  left: 25px;
  z-index: -1;
  width: ${(props) => (props.width ? props.width : "125px")};
  background: ${(props) => (props.background ? props.background : "red")};
  height: 10px;

  @media only screen and (min-width: 320px) and (max-width: 601px) {
    width: ${(props) => (props.width ? props.width : "105px")};
    bottom: ${(props) => (props.bottom ? props.bottom : "97px")};

  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    width: ${(props) => (props.width ? props.width : "105px")};
    bottom: ${(props) => (props.bottom ? props.bottom : "97px")};

}

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    width: ${(props) => (props.width ? props.width : "105px")};
    bottom: ${(props) => (props.bottom ? props.bottom : "103px")};
  }
`;

export const ColorAccentWide = styled.div`
  position: absolute;
  // style set for 1200 ss
  bottom: ${(props) => (props.bottom ? props.bottom : "140px")}; 
  left: 25px;
  z-index: -1;
  width: ${(props) => (props.width ? props.width : "325px")};
  background: ${(props) => (props.background ? props.background : "red")};
  height: 10px;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    bottom: ${(props) => (props.bottom ? props.bottom : "152px")};
  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    bottom: ${(props) => (props.bottom ? props.bottom : "103px")};
  }
  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    bottom: ${(props) => (props.bottom ? props.bottom : "103px")};

  }
`;

export const ColorAccentLarge = styled.div`
  position: absolute;
  // style set for 1200 ss
  bottom: ${(props) => (props.bottom ? props.bottom : "140px")}; 
  left: 25px;
  z-index: -1;
  width: ${(props) => (props.width ? props.width : "125px")};
  background: ${(props) => (props.background ? props.background : "red")};
  height: 10px;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    bottom: ${(props) => (props.bottom ? props.bottom : "143px")};

  }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    bottom: ${(props) => (props.bottom ? props.bottom : "143px")};

  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    bottom: ${(props) => (props.bottom ? props.bottom : "103px")};
  }
`;
