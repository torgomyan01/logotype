import { createSlice } from '@reduxjs/toolkit';

interface IProducts {
  products: {
    title: string;
    text: string;
    tags: string;
    autor: string;
    img: string;
    img_2x: string;
    date: string;
    views: string;
  }[];
}
const initialState: IProducts = {
  products: []
};

const Products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    }
  }
});

export const { setProducts } = Products.actions;

export default Products.reducer;
