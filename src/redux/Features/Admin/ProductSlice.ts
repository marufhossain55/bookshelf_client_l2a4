import { TProduct } from '@/pages/AdminDashboard/productManagement/AddProducts';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

type TInitialState = {
  carts: TProduct[];
  selectedItems: number;
  totalPrice: number;
};

const initialState: TInitialState = {
  carts: [],
  selectedItems: 0,
  totalPrice: 0,
};

const productSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const isExiting = state.carts.find(
        (cart) => cart._id === action.payload._id
      );
      if (!isExiting) {
        state.carts.push({ ...action.payload, quantity: 1 });
        toast.success('All to cart');
      } else {
        toast.success('Already Add Cart');
      }
      state.selectedItems = setSelectedItems(state);
      // state.totalPrice = setTotalPrice(state);
    },
    updateCart: (state, action) => {
      state.carts.map((cart) => {
        if (cart?._id === action.payload.id) {
          if (
            action.payload.type === 'increment' &&
            (cart?.totalQuantity as number) > cart.quantity
          ) {
            cart.quantity += 1;
          } else if (action.payload.type === 'decrement') {
            if (cart.quantity > 1) {
              cart.quantity -= 1;
            }
          } else {
            toast.success(`Stock Available ${cart?.totalQuantity as number}`);
          }
        }
        return cart;
      });
    },
    removeCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart?._id !== action.payload);
      toast('Remove Cart');
      state.selectedItems = 0;
      state.totalPrice = 0;
    },
    clearCart(state) {
      state.carts = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const setSelectedItems = (state: TInitialState) =>
  state.carts.reduce((total: number, cart: TProduct) => {
    return Number(total + cart.quantity);
  }, 0);

export const { addCart, updateCart, removeCart, clearCart } =
  productSlice.actions;
export default productSlice.reducer;
