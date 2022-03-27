import React, { useRef, useContext } from "react";
import DOMPurify from "dompurify";
import styled from "styled-components";
import { SubmitButton } from "./Button";
import { addressData } from "../data/AddressData";
import { MyContext } from "../context";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${(reverse) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${(reverse) => (reverse ? "1" : "2")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    order: ${(reverse) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const ListWrapper = styled.div`
  align-self: center;
  margin-bottom: 2rem;
`;

const InfoSection = (props) => {
  const {
    heading,
    paragraphOne,
    paragraphTwo,
    paragraphTwoBullets,
    buttonLabel,
    reverse,
    image,
    // infoRef,
  } = props;
  const { infoRef } = useContext(MyContext);

  return (
    <Section ref={infoRef}>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(paragraphOne, {
                USE_PROFILES: { html: true },
              }),
            }}
          />
          {paragraphTwo}
          <ListWrapper>
            <ul style={{ listStyleType: "circle" }}>
              {paragraphTwoBullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </ListWrapper>
          <SubmitButton
            primary="true"
            onClick={() => window.open(`tel:${addressData.tel}`, "_self")}
          >
            {buttonLabel}
          </SubmitButton>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
