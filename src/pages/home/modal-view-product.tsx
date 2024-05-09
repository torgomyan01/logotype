import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import styled from 'styled-components';

interface IThisProps {
  product: IProduct | null;
  open: boolean;
  handleClose: () => void;
}

const ProductItem = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  img {
    height: 18.375rem;
    object-fit: cover;
  }
  .tags {
    color: #eb0028;
    font-size: 0.8125rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .title {
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .data {
    color: rgb(155, 155, 155);
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
    strong {
      color: #000;
    }
    span {
      color: rgba(155, 155, 155, 0.5);
      font-size: 0.6rem;
      margin: 0 5px;
    }
  }
  .text {
    margin-bottom: 0;
    color: rgb(146, 146, 146);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 1rem;
  }
`;

function ModalViewProduct({ product, open, handleClose }: IThisProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle>{product?.title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 15,
          top: 15,
          color: '#000',
          fontSize: 18
        }}>
        <i className="icon-close" />
      </IconButton>
      <DialogContent className="pt-0">
        <ProductItem>
          <img
            srcSet={product?.img_2x}
            sizes="(max-width: 768px) 100%, 100%"
            src={product?.img}
            alt={product?.title}
            className="w-100"
          />
          <p className="tags">{product?.tags}</p>
          <p className="data">
            <strong>{product?.autor}</strong> <span>●</span> {product?.date} <span>●</span>{' '}
            {product?.views} Views
          </p>
          <p className="text">{product?.text}</p>
        </ProductItem>
      </DialogContent>
    </Dialog>
  );
}

export default ModalViewProduct;
