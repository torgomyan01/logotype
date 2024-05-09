import React, { useState } from 'react';
import styled from 'styled-components';
import NavItem from './nav-item';
import { RandomKey } from '../../utils/helpers';
import { menu } from '../../utils/const';

const NavMenu = styled.div<{ $fix: boolean }>`
  width: 100%;
  height: 3.59375rem;
  border-bottom: 1px solid rgb(233, 233, 233);
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: ${({ $fix }) => ($fix ? '0' : '-3.59375rem')};
  background: ${({ $fix }) => ($fix ? '#fff' : 'transparent')};
  transition: 0.3s;
  @media (max-width: 576px) {
    display: none;
  }
`;

function Navbar() {
  const [startFix, setStartFix] = useState<boolean>(false);
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      setStartFix(true);
    } else {
      setStartFix(false);
    }
  });

  return (
    <NavMenu $fix={startFix}>
      <div className="container d-flex justify-content-center align-items-center h-100">
        {menu.map((item) => (
          <NavItem key={RandomKey()} item={item} />
        ))}
      </div>
    </NavMenu>
  );
}

export default Navbar;
