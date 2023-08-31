import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Cart } from "@/types/product.type";


interface ProductState {
  carts: Cart[];
  userId: string | null;
}





const initialState: ProductState = {
  carts: [],
  userId: null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    currentUser(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    addCart(state, action: PayloadAction<Cart>) {
      const newCart = action.payload;
      const existingCart = state.carts.find((item) => item.id === newCart.id);

      if (existingCart) {
        toast.error("This product already exists", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      } else {
        toast.success("Product added to the cart", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        const updatedCart =
          newCart.quantity === 0 ? { ...newCart, quantity: 1 } : newCart;
        state.carts.push(updatedCart);
      }
    },
    removeCart(state, action: PayloadAction<number>) {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.carts.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.carts.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    }
  }
});

export const {
  currentUser,
  addCart,
  removeCart,
  incrementQuantity,
  decrementQuantity
} = productSlice.actions;
export default productSlice.reducer;
