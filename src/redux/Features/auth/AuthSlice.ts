import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';

type TUser = {
  userId: string;
  email: string;
};

type TInitialState = {
  token: string | null;
  user: TUser | null;
};

const initialState: TInitialState = {
  token: null,
  user: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const useCurrentToken = (state: RootState) => state?.auth?.token;
export const useCurrentUser = (state: RootState) => state?.auth?.user;

export default authSlice.reducer;
