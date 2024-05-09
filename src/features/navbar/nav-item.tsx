import React from 'react';
import styled from 'styled-components';
import { RandomKey } from '../../utils/helpers';
import { Link } from 'react-router-dom';

interface IThisProps {
  item: {
    name: string;
    url: string | null;
    items: {
      name: string;
      url: string | null;
    }[];
  };
}

const MenuItem = styled.button`
  background: transparent;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  font-weight: 500;
  line-height: 16px;
  position: relative;
  height: 100%;
  margin-right: 2rem;
  display: block;

  &:last-child {
    margin-right: 0;
  }

  &:focus {
    .MenuItem-items {
      opacity: 1;
      transform: translateY(0);
    }
    .MenuItem-header-icon {
      transform: rotate(-180deg);
    }
  }

  .MenuItem-header {
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    height: 100%;
    color: #000;

    &:focus-within {
      .MenuItem-items {
        opacity: 1;
        transform: translateY(0);
      }
      .MenuItem-header-icon {
        transform: rotate(-180deg);
      }
    }
  }
  .MenuItem-header-icon {
    transition: 0.2s;
    transform: rotate(0);
  }

  .MenuItem-name {
    margin-right: 0.4375rem;
  }

  .MenuItem-items {
    position: absolute;
    left: 0;
    top: 100%;
    width: 12.5rem;
    border: 1px solid rgb(233, 233, 233);
    background: rgb(255, 255, 255);
    padding: 1.25rem;
    opacity: 0;
    transform: translateY(-1000px);
    transition: 0.2s opacity;
  }

  .MenuItem-items-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(233, 233, 233);
    padding: 8px 0;
    cursor: pointer;
    transition: 0.3s;
    font-size: 0.8125rem;
    font-weight: 400;
    text-align: left;
    color: #000;
    &:last-child {
      border: 0;
    }
    &:hover {
      padding-left: 10px;
      color: rgb(150, 150, 150);
    }
    .icon-cheveron-down {
      transform: rotate(-90deg);
      color: #000 !important;
    }
  }
`;

function NavItem({ item }: IThisProps) {
  return (
    <MenuItem>
      {item.items.length > 0 ? (
        <div className="MenuItem-header">
          <span className="MenuItem-name">{item.name}</span>
          {item.items.length > 0 && <i className="icon-cheveron-down MenuItem-header-icon fs-4" />}
        </div>
      ) : (
        <Link className="MenuItem-header" to={item.url || '#'}>
          <span className="MenuItem-name">{item.name}</span>
          {item.items.length > 0 && <i className="icon-cheveron-down MenuItem-header-icon fs-4" />}
        </Link>
      )}

      {item.items.length > 0 && (
        <div className="MenuItem-items">
          {item.items.map((items) => (
            <Link key={RandomKey()} to={items.url || '#'} className="MenuItem-items-item">
              {items.name}
              <i className="icon-cheveron-down" />
            </Link>
          ))}
        </div>
      )}
    </MenuItem>
  );
}

export default NavItem;
