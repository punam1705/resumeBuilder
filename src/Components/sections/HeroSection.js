import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimations from "../animations/MockupAnimation"
import WaveBackgrounds from "../backgrounds/WaveBackgrounds"
import { H1 } from "../style/TextStyle"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackgrounds />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br /> and code React apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
          <PurchaseButton />
        </TextWrapper>
        <MockupAnimations />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
0%{
  opacity:0; transfrom: translateY(-10px); filter:blur(10px); 
}

60%{
  opacity:0.5; transfrom: translateY(-10px); filter:blur(10px);
}

100% {opacity:1; transform: translateY(0px); filter:blur(0px);}
`

const Wrapper = styled.div`

  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width:450px){
    grid-template-columns: auto;
    gap:60px;
    padding: 150px 20px 250px;

  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s 0.2s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }

    :nth-child(2) {
      animation-delay: 0.2s;
    }

    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: white;
 
`

const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`
