import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { IconButton } from '@mui/material';
import { menu } from '../../utils/const';
import { RandomKey } from '../../utils/helpers';

interface IThisProps {
  openClose: boolean;
  onClose: () => void;
}

const Menu = styled.div<{ $openClose: boolean }>`
  width: calc(100% - 3.125rem);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 100;
  border-right: 1px solid #e9e9e9;
  transform: ${({ $openClose }) => ($openClose ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${({ $openClose }) => ($openClose ? '1' : '')};
  transition: 0.3s;

  .Menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 17px;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 1rem;
  }

  .Menu-items {
    padding: 20px;
  }

  .Menu-items-item {
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    padding: 15px 0;
    background: #fff;
    width: 100%;
    &:last-child {
      border-bottom: 0;
    }
    i {
      transform: rotate(0);
      transition: 0.3s;
    }
    &:focus-within {
      color: #969696;
      i {
        transform: rotate(-180deg);
      }
    }
  }

  .Menu-items-item:focus-within ~ .Menu-items-item-children {
    max-height: 500px;
    opacity: 1;
  }
`;

const MenuChildren = styled.div`
  padding-left: 20px;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: 0.3s;
  .Menu-items-item {
    justify-content: space-between;
  }
  .icon-cheveron-down {
    transform: rotate(-90deg) !important;
  }
`;

function MobileMenu({ openClose, onClose }: IThisProps) {
  return (
    <Menu $openClose={openClose}>
      <div className="Menu-header">
        <img src={logo} alt="Logo Site" />
        <IconButton
          className="iconMenu"
          onClick={onClose}
          style={{
            color: '#000'
          }}>
          <i className="icon-close" />
        </IconButton>
      </div>
      <div className="Menu-items">
        {menu.map((menuItem) => (
          <div key={RandomKey()}>
            <button className="Menu-items-item">
              {menuItem.name}
              <i className="icon-cheveron-down fs-4 ms-2" />
            </button>
            {menuItem.items.length > 0 && (
              <MenuChildren className="Menu-items-item-children">
                {menuItem.items.map((children) => (
                  <div key={RandomKey()} className="Menu-items-item">
                    {children.name}
                    <i className="icon-cheveron-down fs-4 ms-2" />
                  </div>
                ))}
              </MenuChildren>
            )}
          </div>
        ))}
      </div>
    </Menu>
  );
}

export default MobileMenu;
