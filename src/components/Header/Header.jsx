import React, { useState } from "react";
import Nav from './Nav/Nav'
import { HeaderWrapper } from "./Styled-Components/HeaderWrapper";
import MenuButton from "./Styled-Components/MenuButton";
import '../../styles/styles.scss'



const Header = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return(
  <HeaderWrapper className="header">
    <img src='assets/icon.webp' className="iconNav" alt="icon" />
    <Nav open={open} />
    <MenuButton open={open} handleClick={handleClick} />
  </HeaderWrapper>);


};

export default Header;
