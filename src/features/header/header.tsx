import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import HeaderSearch from './search';
import { IconButton } from '@mui/material';
import MobileMenu from './mobile-menu';

const HeaderBlock = styled.header`
  width: 100%;
  height: 5.09375rem;
  border-bottom: 1px solid rgb(233, 233, 233);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    @media (max-width: 576px) {
      width: 12.1875rem;
    }
  }
  .iconMenu {
    color: #000;
    font-size: 1.5625rem;
    opacity: 0;
    width: 0;
    height: 0;

    @media (max-width: 576px) {
      width: 3.125rem;
      height: 3.125rem;
      opacity: 1;
    }
  }
`;

function Header() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  function openMobileMenu() {
    setMobileMenu(true);
  }
  function closeMobileMenu() {
    setMobileMenu(false);
  }

  return (
    <>
      <HeaderBlock>
        <div className="container d-flex justify-content-between align-items-center position-relative">
          <IconButton className="iconMenu" onClick={openMobileMenu}>
            <i className="icon-menu" />
          </IconButton>
          <img src={logo} alt="Logo Site" />
          <HeaderSearch />
          <div className="opacity-0" />
        </div>
      </HeaderBlock>
      <MobileMenu openClose={mobileMenu} onClose={closeMobileMenu} />
    </>
  );
}

export default Header;
