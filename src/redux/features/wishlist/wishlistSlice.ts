import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../../../types";

const initialState: TProduct[] = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<TProduct>) => {
      const item = state.find(
        (item: TProduct) => item._id === action.payload._id
      );

      if (item) {
        return state.filter((item) => item._id !== action.payload._id);
      }

      state.push(action.payload);
    },
    clearWishlist: () => {
      return initialState
    },
  },
});

export const selectWishlist = (state: RootState) => state.wishlist;

export const { addToWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
