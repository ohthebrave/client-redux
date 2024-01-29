import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product';
import CartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    carts: CartReducer,
    // Add other reducers if needed
  }
});

export default store;
