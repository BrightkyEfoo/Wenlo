import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
interface IAnswers {
  [className: string]: string;
}
type SurveyState = {
  questions: {
    question: string;
    answers: string[];
  }[];
  answers: IAnswers;
};

// Define the initial state using that type
const initialState: SurveyState = {
  questions: [
    {
      question: 'How did you hear about Wenlo?',
      answers: [
        'Forum comments',
        'Internet Article',
        'Google',
        'Suggested by friend',
        'Youtube Video',
        'Facebook',
        'Twitter',
        'Other',
      ],
    },
    {
      question: 'What is the size of your business?',
      answers: [
        'Micro-sized business: less than 10 employees',
        'Small-sized business: 10-49 employees',
        'Medium business: 50-249 employees',
        'Large-sized business: more than 250 employees',
      ],
    },
    {
      question: 'What type of business are you doing?',
      answers: [
        'Freelancing',
        'Dropshipping',
        'Print on demand',
        'Affiliate marketing',
        'Arbitrage',
        'Web development',
        'Digital marketing / Media Buying',
        'Amazon and eBay',
        'Lead generation',
        'Webinars',
        'Funnel agency',
        'Finance',
        'Crypto',
        'eBooks',
        'Course creation',
        'Audiobook',
        'YouTube',
        'Consulting',
        'Apps',
        'Blogging',
        'Gaming',
        'eCommerce brand',
        'Gambling',
        'Other',
      ],
    },
    {
      question:
        'What is your average monthly advertising budget for social media? (Facebook Ads, Google Adwords, TikTok Ads ….)',
      answers: [
        '0 – 1k$ per month',
        '1k$ - 10k$ per month',
        '10k$ - 50k$ per month',
        '50$ - 200k$ per month',
        '+ 200K$ per month',
      ],
    },
    {
      question: 'Do you have experience with agency ads accounts?',
      answers: ['Yes', 'No'],
    },
    {
      question: 'What kind of issues do you have with online adverstising?',
      answers: [
        'Spending Issues',
        'Payment method issues',
        'Daily spend limit',
        'Page restriction',
        'Ad Account Restriction',
        'Restriction of the business account (Business Manager, Business Center…)',
        'Facebook Profile Restriction',
        'Other',
      ],
    },
  ],
  answers: {},
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setSurvey: (state, action: PayloadAction<SurveyState>) => {
      state = action.payload;
    },
    setQuestions: (
      state,
      action: PayloadAction<
        {
          question: string;
          answers: string[];
        }[]
      >
    ) => {
      state.questions = action.payload;
    },
    answerAQuestion: (
      state,
      action: PayloadAction<{ id: number; answer: string }>
    ) => {
      state.answers['Q' + action.payload.id] = action.payload.answer;
    },
  },
});

export const { setSurvey, setQuestions, answerAQuestion } = surveySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getSurvey = (state: RootState) => state.survey;
const surveyReducer = surveySlice.reducer;
export default surveyReducer;
