import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import React from "react";
import { Container, Image, TextContainer } from "./BodyBlock.style";

interface BodyBlockProps {
  background?: string;
  title?: string;
  anchor?: string;
}

const BodyBlock: React.FC<BodyBlockProps> = ({
  background,
  title,
  anchor,
  children,
}) => {
  console.log(background);
  return (
    <Container>
      {background ? (
        <Image src={background} />
      ) : (
        <TextContainer>
          <h2>{title}</h2>
          <p>{children}</p>
          <a href="/">{anchor}</a>
        </TextContainer>
      )}
    </Container>
  );
};

export default BodyBlock;
