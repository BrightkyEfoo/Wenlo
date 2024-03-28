import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type MessageState = {
  id: number;
  room: {
    id: number;
    name: string;
  };
  user: number;
  content: string;
  date: string;
  is_seen: boolean;
}[];

// Define the initial state using that type
const initialState: MessageState = [];

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<MessageState>) => {
      state = action.payload;
    },
  },
});

export const { setMessages } = messageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getMessage = (state: RootState) => state.message;
const messageReducer = messageSlice.reducer;
export default messageReducer;
