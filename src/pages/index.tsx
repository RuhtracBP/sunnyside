import React from "react";
import Hero from "@components/Hero/Hero";
import BodyBlock from "@components/BodyBlock/BodyBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <BodyBlock background="/mobile/image-transform.jpg" />
      <BodyBlock title="Transform your brand" anchor="LEARN MORE">
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </BodyBlock>
      <BodyBlock background="/mobile/image-stand-out.jpg" />
      <BodyBlock title="Stand out to the right audience" anchor="LEARN MORE">
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we'll build and extend your brand in
        digital places.
      </BodyBlock>
    </>
  );
}
