import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/UserSlice';
import surveyReducer from './features/SurveySlice';
import pricingReducer from './features/PricingSlice';
import adAccountReducer from './features/AdAccountSlice';
import transactionReducer from './features/transactionSlice';
import messageReducer from './features/messageSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    survey: surveyReducer,
    pricing: pricingReducer,
    adAccount: adAccountReducer,
    transaction: transactionReducer,
    message: messageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
