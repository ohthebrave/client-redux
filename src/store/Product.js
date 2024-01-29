import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('fetchproducts', async () => {
    
    const data = await fetch('https://online-market-msht.onrender.com/products');
    const jsonData = await data.json();
    return jsonData;
});


export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    data: [],
    error: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.data= action.payload
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        console.error('Fetch products failed:', action.error);
    });
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default productSlice.reducer