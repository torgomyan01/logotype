import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SITE_URL } from './utils/const';
import './App.scss';
import PageNotFound from './pages/404/404';
import AlertSite from './features/alert/alert';
import Home from './pages/home/home';
import { useDispatch } from 'react-redux';
import { GetPosts } from './utils/api';
import { setProducts } from './redux/products';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetPosts().then(({ data }) => {
      dispatch(setProducts(data));
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path={SITE_URL.HOME} element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

      <AlertSite />
    </>
  );
}

export default App;
