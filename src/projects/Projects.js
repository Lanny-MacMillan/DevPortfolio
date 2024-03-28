import React from "react";
import theAdventureImg from "../components/assets/img/theAdventure.png";
import tetrisReact from "../components/assets/img/tetrisReact.png";
import amiiboAppImg from "../components/assets/img/amiibo.png";
import vacationImg from "../components/assets/img/vacation.png";
import geoDashImg from "../components/assets/img/geoDash.png";
import crappyBirdImg from "../components/assets/img/crappyBird.png";
import nightmareImg from "../components/assets/img/nightmare.png";
import storybookImg from "../components/assets/img/storybook.png";
import ProjectCard from "./ProjectCard";
import {
  frontendDev,
  gameDev,
  softwareDev,
} from "../components/assets/constants";

import {
  UnityIcon,
  CSharpIcon,
  ReactIconColor,
  TypescriptIcon,
  JavascriptIcon,
  StorybookIcon,
  MongoDBIcon,
  ExpressIcon,
  PostregSQLIcon,
  NodeJSIcon,
  PythonIcon,
  DjangoIcon,
} from "../components/assets/icons";

import {
  ProjectsContainer,
  Container,
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
  ProjectSix,
  ProjectSeven,
  ProjectEight,
  Header,
} from "./Projects.styles";

const Projects = ({ projects, largeScreen }) => {
  const xVarNegative = largeScreen ? -150 : -75;
  const xVarPositive = largeScreen ? 150 : 75;

  const theAdventure = {
    nameText: "TheAdventure",
    colorSplash: gameDev,
    image: theAdventureImg,
    description:
      "An sidescrolling RPG platformer. Can you discover whats destroying the land, unite the magi and bring a stop to it?",
    link: "https://github.com/Lanny-MacMillan/TheAdventure_Two_Dudes",
    icons: [
      <UnityIcon
        width={30}
        height={30}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
    ],
    iconsLarge: [
      <UnityIcon
        width={40}
        height={40}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
    ],
  };

  const tetris = {
    nameText: "Tetris React",
    image: tetrisReact,
    description: "A clone of the original Tetris, done with React.",
    link: "https://github.com/Lanny-MacMillan/tetrisClone",
    icons: [<ReactIconColor width={30} height={30} />],
    iconsLarge: [<ReactIconColor width={40} height={40} />],
  };

  const theQuickStop = {
    nameText: "The Quickstop - Library",
    colorSplash: softwareDev,
    image: storybookImg,
    description:
      "A personal component library for all my building needs. Brings speed and ease with reusable components.",
    link: "https://github.com/Lanny-MacMillan/TheQuickStop",
    icons: [
      <ReactIconColor width={30} height={30} />,
      <TypescriptIcon width={30} height={30} />,
      <JavascriptIcon width={30} height={30} />,
      <StorybookIcon width={25} height={25} />,
    ],
    iconsLarge: [
      <ReactIconColor width={40} height={40} />,
      <TypescriptIcon width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      <StorybookIcon width={35} height={35} />,
    ],
  };

  const amiiboApp = {
    nameText: "Amiibo App",
    colorSplash: frontendDev,
    image: amiiboAppImg,
    description: "A Full Stack Nintendo Amiibos App for collectors.",
    link: "https://github.com/Lanny-MacMillan/Project2",
    icons: [
      <ExpressIcon width={30} height={30} />,
      <JavascriptIcon width={30} height={30} />,
      <MongoDBIcon width={30} height={30} />,
      <NodeJSIcon width={30} height={30} />,
    ],
    iconsLarge: [
      <ExpressIcon width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      <MongoDBIcon width={40} height={40} />,
      <NodeJSIcon width={40} height={40} />,
    ],
  };

  const vacationApp = {
    nameText: "Vacation App",
    colorSplash: frontendDev,
    image: vacationImg,
    description: "Full stack application that helps users while vacationing. ",
    link: "https://github.com/Lanny-MacMillan/capstone_frontend",
    icons: [
      <ReactIconColor width={30} height={30} />,
      <JavascriptIcon width={30} height={30} />,
      <PostregSQLIcon width={28} height={28} />,
      <PythonIcon width={30} height={30} />,
      <DjangoIcon width={30} height={30} />,
    ],
    iconsLarge: [
      <ReactIconColor width={40} height={40} />,
      <JavascriptIcon width={40} height={40} />,
      <PostregSQLIcon width={38} height={38} />,
      <PythonIcon width={40} height={40} />,
      <DjangoIcon width={40} height={40} />,
    ],
  };

  const crappyBird = {
    nameText: "Crappy Bird",
    colorSplash: gameDev,
    image: crappyBirdImg,
    description: "A clone of the popular flappy bird",
    link: "https://github.com/Lanny-MacMillan/flappyBirdClone",
    icons: [
      <UnityIcon
        width={30}
        height={30}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
    ],
    iconsLarge: [
      <UnityIcon
        width={40}
        height={40}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
    ],
  };

  const geoDash = {
    nameText: "Geometry Dash",
    colorSplash: gameDev,
    image: geoDashImg,
    description: "Geo Dash with some twists",
    link: "https://github.com/Lanny-MacMillan/GeometryDash",
    icons: [
      <UnityIcon
        width={30}
        height={30}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
    ],

    iconsLarge: [
      <UnityIcon
        width={40}
        height={40}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
    ],
  };

  const twoDudesNightmare = {
    nameText: "2D Nightmare",
    colorSplash: gameDev,
    image: nightmareImg,
    description: "A sidescrolling platformer created in Unity ",
    link: "https://github.com/Lanny-MacMillan/Unity_Game_Two_Dudes",
    icons: [
      <UnityIcon
        width={30}
        height={30}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={30} height={30} logoFill={"#FFFFFF"} />,
      // Aesprite Icon
    ],
    iconsLarge: [
      <UnityIcon
        width={40}
        height={40}
        logoFill={"#FFFFFF"}
        backgroundFill={"#262626"}
      />,
      <CSharpIcon width={40} height={40} logoFill={"#FFFFFF"} />,
      // Aesprite Icon
    ],
  };

  return (
    <ProjectsContainer ref={projects}>
      <Header>Projects</Header>
      <Container>
        <ProjectOne
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={vacationApp.nameText}
            img={vacationApp.image}
            description={vacationApp.description}
            icons={vacationApp.icons}
            iconsLarge={vacationApp.iconsLarge}
            link={vacationApp.link}
            colorSplash={vacationApp.colorSplash}
            colorSplashWidth={"135px"}
          />
        </ProjectOne>
        <ProjectTwo
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={theQuickStop.nameText}
            img={theQuickStop.image}
            description={theQuickStop.description}
            icons={theQuickStop.icons}
            iconsLarge={theQuickStop.iconsLarge}
            link={theQuickStop.link}
            colorSplash={theQuickStop.colorSplash}
            colorSplashWidth={"230px"}
            margin={"none"}
            type={"wide"}
          />
        </ProjectTwo>
        <ProjectThree
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={theAdventure.nameText}
            img={theAdventure.image}
            description={theAdventure.description}
            icons={theAdventure.icons}
            iconsLarge={theAdventure.iconsLarge}
            link={theAdventure.link}
            colorSplash={theAdventure.colorSplash}
            colorSplashWidth={"140px"}
            type={"wide"}
          />
        </ProjectThree>
        <ProjectFour
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={amiiboApp.nameText}
            img={amiiboApp.image}
            description={amiiboApp.description}
            icons={amiiboApp.icons}
            iconsLarge={amiiboApp.iconsLarge}
            link={amiiboApp.link}
            colorSplash={amiiboApp.colorSplash}
            colorSplashWidth={"120px"}
          />
        </ProjectFour>
        <ProjectFive
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={tetris.nameText}
            img={tetris.image}
            description={tetris.description}
            icons={tetris.icons}
            iconsLarge={tetris.iconsLarge}
            link={tetris.link}
            colorSplash={tetris.colorSplash}
            colorSplashWidth={"120px"}
            margin={"none"}
          />
        </ProjectFive>
        <ProjectSix
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={twoDudesNightmare.nameText}
            img={twoDudesNightmare.image}
            description={twoDudesNightmare.description}
            icons={twoDudesNightmare.icons}
            iconsLarge={twoDudesNightmare.iconsLarge}
            link={twoDudesNightmare.link}
            colorSplash={twoDudesNightmare.colorSplash}
            colorSplashWidth={"140px"}
            margin={"none"}
          />
        </ProjectSix>
        <ProjectSeven
          initial={{
            opacity: 0,
            x: xVarNegative,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={crappyBird.nameText}
            img={crappyBird.image}
            description={crappyBird.description}
            icons={crappyBird.icons}
            iconsLarge={crappyBird.iconsLarge}
            link={crappyBird.link}
            colorSplash={crappyBird.colorSplash}
            colorSplashWidth={"125px"}
            margin={"none"}
          />
        </ProjectSeven>
        <ProjectEight
          initial={{
            opacity: 0,
            x: xVarPositive,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <ProjectCard
            largeScreen={largeScreen}
            nameText={geoDash.nameText}
            img={geoDash.image}
            description={geoDash.description}
            icons={geoDash.icons}
            iconsLarge={geoDash.iconsLarge}
            link={geoDash.link}
            colorSplash={geoDash.colorSplash}
            colorSplashWidth={"155px"}
          />
        </ProjectEight>
      </Container>
      {/* Card Two - Nuemorphism UI Design */}
      {/* <ProjectCard2>
        <Box>
          <Content>
            <ContentH2>Tetris</ContentH2>
            <ContentH3>React JS</ContentH3>
            <ContentP>
              A clone of the original Tetris, done with React.
            </ContentP>

            <ContentA href="#">Read More</ContentA>
            <SkillsDiv>
              <ReactIconColor />
              <JavascriptIcon logoFill={"black"} backgroundFill={"yellow"} />
            </SkillsDiv>
          </Content>
        </Box>
      </ProjectCard2> */}
      {/* Card Three - Nuemorphism UI Design */}
    </ProjectsContainer>
  );
};

export default Projects;
