import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type IStringNull = string | null | undefined;
export type INumberNull = number | null | undefined;
type PricingState = {
  id: number;
  pricing_name: IStringNull;
  TUF: IStringNull;
  MAM: IStringNull;
  RARS: IStringNull;
  PRP: IStringNull;
  MAAP: IStringNull;
  LCCS: IStringNull;
  PAOM: IStringNull;
  FCAN: IStringNull;
  MU: IStringNull;
  TMTUL: IStringNull;
  monthly_Billing: IStringNull;
  annual_Billing: IStringNull;
  isPersonalized: boolean | null | undefined;
}[];
const initialState: PricingState = [];

const pricingSlice = createSlice({
  name: 'pricingSlice',
  initialState,
  reducers: {
    setPricings: (state, action: PayloadAction<PricingState>) => {
      state = action.payload;
    },
  },
});

export const { setPricings } = pricingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getPricing = (state: RootState) => state.pricing;
const pricingReducer = pricingSlice.reducer;
export default pricingReducer;
