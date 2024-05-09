import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RandomKey } from '../../utils/helpers';
import Product from '../product/product';
import noResult from '../../assets/images/no-result.svg';

const LabelSearch = styled.label<{ $handleSearch: boolean }>`
  width: ${({ $handleSearch }) => ($handleSearch ? '18.75rem' : '2.5rem')};
  height: 40px;
  border: ${({ $handleSearch }) => ($handleSearch ? '1px solid #E9E9E9' : '1px solid #0000')};
  border-radius: 5px;
  transition: 0.3s;
  z-index: 100;
  position: ${({ $handleSearch }) =>
    $handleSearch && window.innerWidth < 769 ? 'fixed' : 'absolute'};
  overflow: hidden;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 1660px) {
    right: 10px;
  }
  @media (max-width: 768px) {
    width: ${({ $handleSearch }) => ($handleSearch ? 'calc(100% - 1.6rem)' : '2.5rem')};
  }
  input {
    width: ${({ $handleSearch }) => ($handleSearch ? 'calc(100% - 2.0rem)' : '0')};
    height: 2rem;
    padding-left: ${({ $handleSearch }) => ($handleSearch ? '5px' : '0')};
    transition: 0.3s;
  }
`;

const InputFon = styled.div<{ $openClose: boolean }>`
  width: 100%;
  height: 100vh;
  background: ${({ $openClose }) => ($openClose ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: blur(2px);
  transition: 0.3s;
  z-index: ${({ $openClose }) => ($openClose ? '1' : '-13')};
  padding-top: 4.6875rem;

  @media (max-width: 768px) {
    .container {
      margin: 0 10px;
      width: calc(100% - 20px);
    }
  }
  .row {
    background: #fff;
    padding-top: 10px;
    border-radius: 10px;
    height: calc(100vh - 14.6875rem);
    overflow-y: auto;
    border-bottom: 11px solid #fff;
    box-shadow:
      0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    @media (max-width: 768px) {
      height: calc(100vh - 5.6875rem);
    }
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

function HeaderSearch() {
  const products = useSelector((state: IProducts) => state.Products.products);
  const [resultSearching, setResultSearching] = useState<IProduct[] | null>([]);
  const input = useRef<HTMLInputElement | null>(null);
  const [handleSearch, setHandleSearch] = useState<boolean>(false);

  const openCloseSearch = () => {
    setHandleSearch(!handleSearch);
  };
  const closeSearching = () => {
    setHandleSearch(false);
    setResultSearching([]);
    if (input.current) {
      input.current.value = '';
    }
  };

  useEffect(
    () => (input.current && handleSearch ? input.current?.focus() : input.current?.blur()),
    [handleSearch]
  );

  function changeInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase();
    const result = products.filter((item) => item.title.toLowerCase().includes(value));
    setResultSearching(result.length > 0 ? result : null);
    if (!value) {
      setResultSearching([]);
    }
  }

  return (
    <>
      <LabelSearch $handleSearch={handleSearch}>
        <IconButton onClick={openCloseSearch}>
          <i className="icon-search" />
        </IconButton>
        <input type="text" ref={input} onChange={changeInput} />
      </LabelSearch>
      <InputFon $openClose={handleSearch} onClick={closeSearching}>
        {resultSearching ? (
          resultSearching?.length > 0 && (
            <div className="container">
              <div className="row">
                {resultSearching?.map((product) => <Product key={RandomKey()} product={product} />)}
              </div>
            </div>
          )
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-center align-items-center flex-column pt-5">
                  <img src={noResult} alt="no result" />
                  <h1 style={{ color: '#3d3d3d' }} className="mt-2">
                    Sorry we {"couldn't"} find
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </InputFon>
    </>
  );
}

export default HeaderSearch;
