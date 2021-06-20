import React from "react";
import { TopBarContainer } from "./TopBar.styled";

export default function TopBar() {
  return (
    <TopBarContainer>
      <div>
        <h2>Sunnyside</h2>
      </div>
      <div>
        <a href="/"> MENU </a>
        {/* <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul> */}
      </div>
    </TopBarContainer>
  );
}
