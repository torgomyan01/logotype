import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AlertSite from '../redux/alert-site';
import Products from '../redux/products';

const reducers = combineReducers({
  AlertSite,
  Products
});

export default configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActionPaths: ['payload.config.transformRequest']
    }
  })
});
