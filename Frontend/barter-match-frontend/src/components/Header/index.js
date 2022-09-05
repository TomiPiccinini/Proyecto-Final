import React from "react";
import { Button, Wrapper, ButtonContainer, Logo } from "./styled";
import { TABS_SECTIONS } from "./constants";
import history from "../../utils/history"
import LogoUtn from "../../images/logo.png"

const Header = () => {
  return (
    <Wrapper>
      <Logo src={LogoUtn}/>
      <h1>BarterMatch</h1>
      <ButtonContainer>
        {TABS_SECTIONS.map((tab) => (
            <Button onClick={() => history.push(tab.value)} key={tab.value}>
              {tab.title}
            </Button>
          ))}
      </ButtonContainer>
    </Wrapper>
  );
};

export default Header;
