import React from "react";
import {
  BodyContainer,
  IconContainer,
  HeroHeader,
  UpperRow,
  UpperInnerDiv,
  LowerDiv,
  ChatDiv,
  TalkText,
  ChatArrow,
  CenteredDiv,
} from "./Home.styles.js";
import { SelfIconSmall } from "../assets/icons.js";
import DevDesktop from "../assets/anim/devDesktop/DevDesktop.js";
const Home = ({ home, largeScreen }) => {
  return (
    <BodyContainer>
      <IconContainer ref={home}>
        <UpperRow>
          <UpperInnerDiv>
            {largeScreen ? (
              <SelfIconSmall height={"500px"} width={"500px"} />
            ) : (
              <SelfIconSmall height={"200px"} width={"200px"} />
            )}
            <HeroHeader>
              <ChatDiv>
                <ChatArrow />
                <TalkText>
                  I'm Lanny,
                  <br />A software/web developer, indie gamemaker and designer.
                  I'm also a highly organized and creative problem solver with a
                  passion for providing well crafted solutions. I love to
                  collaborate on projects and thrive solving front and back end
                  challenges.
                </TalkText>
              </ChatDiv>
            </HeroHeader>
          </UpperInnerDiv>
        </UpperRow>
        <LowerDiv>
          <CenteredDiv>
            <DevDesktop />
          </CenteredDiv>
        </LowerDiv>
      </IconContainer>
    </BodyContainer>
  );
};

export default Home;
