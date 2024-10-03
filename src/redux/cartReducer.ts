import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductDTO {
  id: number;
  price: number;
  desc: string;
  title: string;
  img: string;
  quantity: number; // Adding quantity to the ProductDTO for cart management
}

interface CartState {
  products: ProductDTO[];
}

const initialState: CartState = {
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductDTO>) => {
      const item = state.products.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => { // Use number since id is of type number
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
