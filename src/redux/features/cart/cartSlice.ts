import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TCart,
  TCartItem,
  TOrderItem,
  TShippingAddress,
} from "../../../../types";
import { round2 } from "@/lib/utils";

const initialState: TCart = {
  items: [],
  totalQuantity: 0,
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  paymentMethod: "aamrpay",
  shippingAddress: {
    fullName: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const item = state.items.find(
        (item: TCartItem) => item.id === action.payload.id
      );
      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      const { totalQuantity, itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(state.items);
      state.totalQuantity = totalQuantity;
      state.itemsPrice = itemsPrice;
      state.shippingPrice = shippingPrice;
      state.taxPrice = taxPrice;
      state.totalPrice = totalPrice;
    },
    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find(
        (item: TCartItem) => item.id === action.payload.id
      );
      if (item) {
        item.qty += 1;
      }

      const { totalQuantity, itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(state.items);
      state.totalQuantity = totalQuantity;
      state.itemsPrice = itemsPrice;
      state.shippingPrice = shippingPrice;
      state.taxPrice = taxPrice;
      state.totalPrice = totalPrice;
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find(
        (item: TCartItem) => item.id === action.payload.id
      );
      if (item && item.qty > 1) {
        item.qty -= 1;
      }

      const { totalQuantity, itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(state.items);
      state.totalQuantity = totalQuantity;
      state.itemsPrice = itemsPrice;
      state.shippingPrice = shippingPrice;
      state.taxPrice = taxPrice;
      state.totalPrice = totalPrice;
    },
    saveShippingAddress: (state, action: PayloadAction<TShippingAddress>) => {
      state.shippingAddress = { ...action.payload };
    },
    updatePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(
        (item: TCartItem) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  saveShippingAddress,
  updatePaymentMethod,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

const calcPrice = (items: TOrderItem[]) => {
  const totalQuantity = items.reduce((acc, item) => acc + item.qty, 0),
    itemsPrice = round2(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = round2(itemsPrice > 100 ? 0 : 100),
    taxPrice = round2(Number(0.15 * itemsPrice)),
    totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  return { totalQuantity, itemsPrice, shippingPrice, taxPrice, totalPrice };
};
