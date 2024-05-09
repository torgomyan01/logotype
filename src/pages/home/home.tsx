import React, { useState } from 'react';
import './home.scss';
import Header from '../../features/header/header';
import Navbar from '../../features/navbar/navbar';
import { useSelector } from 'react-redux';
import { RandomKey } from '../../utils/helpers';
import Product from '../../features/product/product';
import LoadingProduct from './loading-product';
import ModalViewProduct from './modal-view-product';

function Home() {
  const products = useSelector((state: IProducts) => state.Products.products);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (product: IProduct) => {
    setOpen(true);
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {products.length > 0
            ? products.map((product) => (
                <Product
                  key={RandomKey()}
                  product={product}
                  onClick={() => handleClickOpen(product)}
                />
              ))
            : Array.from({ length: 9 }).map(() => <LoadingProduct key={RandomKey()} />)}
        </div>
      </div>
      <ModalViewProduct product={selectedProduct} handleClose={handleClose} open={open} />
    </>
  );
}

export default Home;
