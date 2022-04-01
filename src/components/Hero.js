import React, { useContext } from "react";
import styled from "styled-components/macro";
import { SubmitButton } from "./Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { COLORS } from "../style/variables";
import { scrollDown } from "../pages/Home";
import { MyContext } from "../context";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  /* z-index: 1; */
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    /* z-index: 2; */
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  /* z-index: 10; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: ${COLORS.white};
  text-align: center;

  h1 {
    font-size: clamp(1rem, 8vw, 3rem); //responsive text
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.8rem;
  }
  p {
    font-size: clamp(0.825rem, 8vw, 2rem);
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 1.2rem;
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const Hero = ({ image, alt, title, subTitle, path, label }) => {
  const { infoRef } = useContext(MyContext);

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0 },
  };

  return (
    <HeroSection>
      <HeroWrapper>
        <AnimatePresence>
          <HeroSlide>
            <HeroSlider>
              <HeroImage
                src={image}
                alt={alt}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeAnimation}
              />
              <HeroContent>
                <h1
                  style={{ fontWeight: 800 }}
                  data-aos="fade-down"
                  data-aos-duration="600"
                >
                  {title}
                </h1>
                <h1
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  {subTitle}
                </h1>
                <SubmitButton
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-delay="250"
                  to={path}
                  primary="true"
                  css={`
                    max-width: 160px;
                  `}
                  onClick={() => scrollDown(infoRef)}
                >
                  {label}
                  <Arrow />
                </SubmitButton>
              </HeroContent>
            </HeroSlider>
          </HeroSlide>
        </AnimatePresence>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
