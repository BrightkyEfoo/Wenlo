import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type AdAccountState = {
  id: number;
  account_name: string;
  time_zone: string;
  domain: string;
  country: string;
  identity: string;
  balance: number;
  account_type: string | null | undefined;
  account_email: string | null | undefined;
  user: number;
  business_center: string | null | undefined;
}[];

// Define the initial state using that type
const initialState: AdAccountState = [
  {
    id: 2,
    account_name: 'Pubs2',
    time_zone: 'GMT+2',
    domain: 'http://www.pub.com',
    country: 'cameroon',
    identity: '35465132AD',
    balance: 45,
    account_type: null,
    account_email: null,
    user: 2,
    business_center: null,
  },
];

export const adAccountSlice = createSlice({
  name: 'adAccount',
  initialState,
  reducers: {
    setAdAccounts: (state, action: PayloadAction<AdAccountState>) => {
      state = action.payload;
    },
  },
});

export const { setAdAccounts } = adAccountSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getAdAccount = (state: RootState) => state.adAccount;
const adAccountReducer = adAccountSlice.reducer;
export default adAccountReducer;
