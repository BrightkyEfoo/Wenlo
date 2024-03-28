import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface UserState {
  id: number;
  last_login: null;
  is_superuser: boolean;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  date_joined: string;
  email: string;
  balance: number;
  is_verified: boolean;
  is_active: boolean;
  otp: string;
  pricing: number;
  p_pricing: any;
  groups: any[];
  user_permissions: any[];
}

// Define the initial state using that type
const initialState: UserState = {
  id: 0,
  last_login: null,
  is_superuser: false,
  first_name: '',
  last_name: '',
  is_staff: false,
  date_joined: '',
  email: '',
  balance: 0,
  is_verified: false,
  is_active: false,
  otp: '',
  pricing: 0,
  p_pricing: null,
  groups: [],
  user_permissions: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      return { ...state };
    },
    clearUser: state => {
      state = initialState;
      return { ...state };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUser = (state: RootState) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
