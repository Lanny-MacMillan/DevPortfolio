import React from "react";
import {
  ReactIconColor,
  JavascriptIcon,
  TypescriptIcon,
  UnityIconColor,
  CSharpIcon,
} from "../components/assets/icons";

import {
  ExperienceContainer,
  Header,
  ExperienceDiv,
  ProjectCard,
  CardHeader,
  CardFooter,
  Icon,
  Smalltext,
  Container,
} from "./Work.styles.js";

const Work = ({ work, largeScreen }) => {
  console.log("largeScreen", largeScreen);
  return (
    <>
      <ExperienceContainer ref={work}>
        <Container>
          <Header>Experience</Header>

          <ExperienceDiv>
            <ProjectCard>
              <CardHeader>
                <strong>Thryv Inc.</strong>
              </CardHeader>
              <p>
                <strong>Web Developer</strong>
                <br />
                Develop features, fix bugs, Asana, Duda, Oauth, LaunchDarkly
                etc.
              </p>
              <CardFooter>
                <Smalltext>Sept 2022 - current</Smalltext>

                {largeScreen ? (
                  <Icon>
                    <ReactIconColor height={40} width={40} />{" "}
                    <JavascriptIcon height={40} width={40} />{" "}
                    <TypescriptIcon height={40} width={40} />{" "}
                  </Icon>
                ) : (
                  <Icon>
                    <ReactIconColor height={30} width={30} />{" "}
                    <JavascriptIcon height={30} width={30} />{" "}
                    <TypescriptIcon height={30} width={30} />{" "}
                  </Icon>
                )}
              </CardFooter>
            </ProjectCard>
            <br />
            <ProjectCard>
              <CardHeader>
                <strong>Two Dudes Games</strong>
              </CardHeader>
              <p>
                <strong>Indie Game Developer</strong>
                <br />
                Creating indie games using Object Oriented Programming with
                Unity and C#
              </p>
              <CardFooter>
                <Smalltext>Dec 2023 - current</Smalltext>
                {largeScreen ? (
                  <Icon>
                    <UnityIconColor height={40} width={40} />{" "}
                    <CSharpIcon height={40} width={40} />{" "}
                  </Icon>
                ) : (
                  <Icon>
                    <UnityIconColor height={30} width={30} />{" "}
                    <CSharpIcon height={30} width={30} />{" "}
                  </Icon>
                )}
              </CardFooter>
            </ProjectCard>
          </ExperienceDiv>
        </Container>
      </ExperienceContainer>
    </>
  );
};

export default Work;
