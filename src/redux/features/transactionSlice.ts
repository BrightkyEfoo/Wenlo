import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { INumberNull, IStringNull } from './PricingSlice';

type TransactionState = {
  id: number;
  identity: IStringNull;
  type: IStringNull;
  amount: number;
  modif_amount: number;
  amount_due: INumberNull;
  charges: number;
  transaction_link: IStringNull;
  fichier: IStringNull;
  status: string;
  reason_rejected: IStringNull;
  request_time: string;
  response_time: string;
  on_hold: IStringNull;
  account_name: IStringNull;
  time_zone: IStringNull;
  domain: IStringNull;
  country: IStringNull;
  account_type: IStringNull;
  account_email: IStringNull;
  draft: boolean;
  pay_method: number;
  assign_to: IStringNull;
  business_center: IStringNull;
}[];

// Define the initial state using that type
const initialState: TransactionState = [];

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<TransactionState>) => {
      state = action.payload;
    },
  },
});

export const { setTransactions } = transactionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTransaction = (state: RootState) => state.transaction;
const transactionReducer = transactionSlice.reducer;
export default transactionReducer;
