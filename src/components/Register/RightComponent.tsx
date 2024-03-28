import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import FormInput, { FormInputProps } from './FormInput';
import { styled } from '@mui/material/styles';
import styles from './RightComponent.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  stepConnectorClasses,
} from '@mui/material';
import api from '../../utils/Axios';
import userService from '../../Services/User';
import surveyService from '../../Services/Survey';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setQuestions } from '../../redux/features/SurveySlice';
import { setUser } from '../../redux/features/UserSlice';

const steps = ['Wenlo', 'Business', 'Advertising'];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      width: 24,
      height: 24,
      borderRadius: '50%',
      borderWidth: 5,
      borderColor: '#3949a1',
      borderStyle: 'solid',
      backgroundColor: '#3949a1',
    },
    '& .QontoStepIcon-active': {
      width: 24,
      height: 24,
      borderRadius: '50%',
      borderWidth: 5,
      borderColor: '#3949a1',
      borderStyle: 'solid',
      backgroundColor: 'white',
    },
    '& .QontoStepIcon-circle': {
      width: 24,
      height: 24,
      borderRadius: '50%',
      borderWidth: 2,
      borderColor: '#E0E0E0',
      borderStyle: 'solid',
      backgroundColor: 'white',
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        // <FaCheck className="QontoStepIcon-completedIcon" />
        <div className="QontoStepIcon-completedIcon" />
      ) : active ? (
        <div className="QontoStepIcon-active" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const RightComponent = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: '',
    code: '',
    Q1: '',
    Q2: '',
    Q3: '',
    Q4: '',
    Q5: '',
    Q6: '',
  });
  const user = useAppSelector(state => state.user);
  const questions = useAppSelector(state => state.survey.questions);
  const dispatch = useAppDispatch();
  const [forgotPasswordIndex, setForgotPasswordIndex] = useState(0);
  const handleChangeByTagName = useCallback((e: ChangeEvent) => {
    setForm(prev => {
      let temp = { ...prev };
      // @ts-ignore
      temp[e.target.name] = e.target.value;
      return temp;
    });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (route: string) => {
    navigate(route);
  };

  const [stepperIndex, setStepperIndex] = useState(0);

  const stepper3Radios: {
    name: string;
    radios: string[];
  }[] = [
    {
      name: 'Q4',
      radios: questions[3]?.answers || ['$0 – $1k per month'],
    },
    {
      name: 'Q5',
      radios: questions[4]?.answers || ['Yes', 'No'],
    },
  ];
  const inputsQuestion: FormInputProps[][] = [
    [
      {
        label: questions[0]?.question || 'How did you hear about Wenlo?',
        onChange: handleChangeByTagName,
        name: 'Q1',
        size: 'large',
        type: 'select',
        value: form.code,
        options: questions[0]?.answers || ['Forum Comments'],
        required: true,
      },
    ],
    [
      {
        label: questions[1]?.question || 'What is the size of your business?',
        onChange: handleChangeByTagName,
        name: 'Q2',
        size: 'large',
        type: 'select',
        value: form.code,
        options: questions[1]?.answers || [
          'Micro-sized business: less than 10 employees',
        ],
        required: true,
      },
      {
        label: questions[2]?.question || 'What type of business are you doing?',
        onChange: handleChangeByTagName,
        name: 'Q3',
        size: 'large',
        type: 'select',
        value: form.code,
        options: questions[2]?.answers || ['Freelancing'],
        required: true,
      },
    ],
  ];

  useEffect(() => {
    const v = async () => {
      const [status, questionsData] = await surveyService.listQuestionnaire();

      if (status === 0 && questionsData.status === 200) {
        console.log('questionsData', questionsData);
        const questions = Object.keys(questionsData).map((el, idx) => {
          return {
            question: el,
            answers: questionsData[el] as string[],
          };
        });
        dispatch(setQuestions(questions));
      }
    };
    v();
  }, [dispatch]);

  const inputsForgotPassword: FormInputProps[][] = [
    [
      {
        label: 'Confirmation code',
        placeholder: 'Enter your confirmation code',
        onChange: handleChangeByTagName,
        name: 'code',
        size: 'large',
        type: 'email',
        value: form.code,
        required: true,
      },
    ],
    [
      {
        label: 'New password',
        placeholder: 'Enter your new pasword',
        onChange: handleChangeByTagName,
        name: 'password',
        size: 'large',
        type: 'password',
        required: true,
        value: form.password,
        advise:
          'One capital letter required, one special character required, one number required*',
      },
      {
        label: 'Confirm Password',
        placeholder: 'Confirm your new password',
        onChange: handleChangeByTagName,
        name: 'repassword',
        size: 'large',
        type: 'password',
        required: true,
        value: form.repassword,
      },
    ],
  ];

  const inputsActivateAccount: FormInputProps[] = [
    {
      label: 'Enter the activation code',
      required: true,
      placeholder: 'Enter the code you recieve by email',
      onChange: handleChangeByTagName,
      name: 'code',
      size: 'large',
      type: 'text',
      value: form.code,
    },
  ];

  const inputsLogin: FormInputProps[] = [
    {
      label: 'Email',
      placeholder: 'Enter your email',
      onChange: handleChangeByTagName,
      name: 'email',
      size: 'large',
      type: 'email',
      value: form.email,
    },
    {
      label: 'New password',
      placeholder: 'Enter your new pasword',
      onChange: handleChangeByTagName,
      name: 'password',
      size: 'large',
      type: 'password',
      value: form.password,
      advise:
        'One capital letter required, one special character required, one number required*',
    },
  ];
  const inputs: FormInputProps[] = [
    {
      label: 'First Name',
      placeholder: 'Enter your first name',
      onChange: handleChangeByTagName,
      name: 'firstname',
      size: 'medium',
      type: 'text',
      value: form.firstname,
    },
    {
      label: 'Last Name',
      placeholder: 'Enter your last name',
      onChange: handleChangeByTagName,
      name: 'lastname',
      size: 'medium',
      type: 'text',
      value: form.lastname,
    },
    {
      label: 'Email',
      placeholder: 'Enter your email',
      onChange: handleChangeByTagName,
      name: 'email',
      size: 'large',
      type: 'email',
      value: form.email,
    },
    {
      label: 'New password',
      placeholder: 'Enter your new pasword',
      onChange: handleChangeByTagName,
      name: 'password',
      size: 'medium',
      type: 'password',
      value: form.password,
      advise:
        'One capital letter required, one special character required, one number required*',
    },
    {
      label: 'Confirm password',
      placeholder: 'Confirm your new pasword',
      onChange: handleChangeByTagName,
      name: 'repassword',
      size: 'medium',
      type: 'password',
      value: form.repassword,
    },
  ];

  const handleLogin = async () => {
    console.log('try login', form.email, form.password);
    const res = await userService.login(form.email, form.password);
    // clo
    if (res[0] === 0 && res[1].status === 200) {
      console.log('res', res);
      console.log('res[1].user[0]', res[1].user[0]);
      dispatch(setUser(res[1].user[0]));
      navigate('/dashboard');
      console.log('res[1]', res);
    } else {
      console.log('error', res);
    }
  };

  const handleRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log('form', form);
    const response = await userService.register(
      form.email,
      form.password,
      form.firstname,
      form.lastname
    );

    console.log(response);

    if (response[1].status === 201) {
      navigate('/activate-account');
    } else {
      console.log(response);
    }
  };

  const form1Ref = useRef<HTMLFormElement>(null);
  const form2Ref = useRef<HTMLFormElement>(null);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div>
          <img src="images/image-12@2x.png" alt="" />
          <p className="font-16 font-600 text-center">Welcome to Wenlo 👋</p>
        </div>

        {location.pathname === '/register' ? (
          <>
            <form className={styles.formContainer}>
              {inputs.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <button className="btn-variant-2" onClick={handleRegister}>
              Next
            </button>
            <p className="font-14">
              <span className="color-gray">Already have an account? </span>
              <span
                className="color-blue pointer"
                onClick={() => navigate('/login')}
              >
                Sign in
              </span>
            </p>
          </>
        ) : location.pathname === '/login' ? (
          <>
            <form className={styles.formContainer}>
              {inputsLogin.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <span
              className={styles.left + ' color-blue pointer'}
              onClick={async () => {
                console.log('email', form.email);
                userService.resetPasswordOtp(form.email);
                navigate('/forget-password');
              }}
            >
              Forgot Password
            </span>
            <button className="btn-variant-2" onClick={handleLogin}>
              Login
            </button>

            <p className="font-14">
              <span className="color-gray">Doesn’t have an account?</span>
              <span
                className="color-blue pointer"
                onClick={() => goTo('/register')}
              >
                Sign up
              </span>
            </p>
          </>
        ) : location.pathname === '/forget-password' ? (
          <>
            <h2 className={'font-32 font-800 color-black text-center'}>
              {forgotPasswordIndex === 0
                ? 'Forget Password'
                : 'Set New Password'}
            </h2>
            <p className={'color-gray font-14 text-center'}>
              {forgotPasswordIndex === 0
                ? `We have sent a confirmation code to ${user.email}`
                : 'Please set a password for your account.'}
            </p>
            <form className={styles.formContainer}>
              {inputsForgotPassword[forgotPasswordIndex].map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <button
              className="btn-variant-2"
              onClick={async () => {
                if (forgotPasswordIndex === 0) {
                  console.log('code', form.code);
                  const res = await userService.verifyOtp(
                    form.email,
                    form.code
                  );

                  if (res[0] === 0 && res[1].status === 200) {
                    setForgotPasswordIndex(prev => (prev === 0 ? 1 : 0));
                  }
                  console.log('res', res);
                } else {
                  const res = await userService.resetPassword(
                    form.email,
                    form.password
                  );
                  if (res[0] === 0 && res[1].status === 200) {
                    setForgotPasswordIndex(prev => (prev === 0 ? 1 : 0));
                    navigate('/login');
                  }
                }
              }}
            >
              {forgotPasswordIndex === 0 ? 'Continue' : 'Submit'}
            </button>

            {forgotPasswordIndex === 0 && (
              <p className="font-14">
                <span className="color-gray">Didn’t get a code?</span>
                <span
                  className="color-blue pointer"
                  onClick={() => console.log('code resend')}
                >
                  Resend Code
                </span>
              </p>
            )}
          </>
        ) : location.pathname === '/activate-account' ? (
          <>
            <h2 className={'font-32 font-800 color-black text-center'}>
              Activate your account
            </h2>
            <p className={'color-gray font-14 text-center'}>
              Enter the activation code present in your mail
            </p>
            <form className={styles.formContainer}>
              {inputsActivateAccount.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <button
              className="btn-variant-2"
              onClick={async e => {
                let res = await userService.verifyOtp(form.email, form.code);

                console.log('res activate', res);
                if (res[0] === 0 && res[1].status === 200) {
                  console.log('success activation');
                } else {
                  return;
                }
                res = await userService.login(form.email, form.password);

                if (res[0] === 0 && res[1].status === 200) {
                  navigate('/questions');
                }
              }}
            >
              Submit
            </button>

            <p className="font-14">
              <span className="color-gray">Didn't receive a mail,</span>
              <span
                className="color-blue pointer"
                onClick={() => console.log('resend mail')}
              >
                click here
              </span>
              <span className="color-gray"> and check your mailbox again.</span>
            </p>
          </>
        ) : (
          <>
            <div className={styles.stepperContainer}>
              <Stepper
                alternativeLabel
                activeStep={stepperIndex}
                connector={<QontoConnector />}
              >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            {stepperIndex < 2 ? (
              <form ref={form1Ref} className={styles.formContainer}>
                {inputsQuestion[stepperIndex]?.map((el, i) => {
                  return <FormInput key={i} {...el} />;
                })}
              </form>
            ) : (
              <form ref={form2Ref} className={styles.formContainer2}>
                <label>
                  {questions[3]?.question ||
                    `What is your average monthly advertising budget for social
                  media? (Facebook Ads, Google Adwords, TikTok Ads ….)`}
                  <span className={'color-red'}>*</span>
                </label>
                <div>
                  {stepper3Radios[0].radios.map((el, i) => (
                    <StepperRadioButton
                      key={i}
                      label={el}
                      name={stepper3Radios[0].name}
                    />
                  ))}
                </div>
                <label>
                  {questions[4]?.question ||
                    `Do you have experience with agency ads accounts?`}
                  <span className={'color-red'}>*</span>
                </label>
                <div>
                  {stepper3Radios[1].radios.map((el, i) => (
                    <StepperRadioButton
                      key={i}
                      label={el}
                      name={stepper3Radios[1].name}
                    />
                  ))}
                </div>
                <label>
                  {questions[5]?.question ||
                    `What kind of issues do you have with online adverstising?`}
                  <span className={'color-red'}>*</span>
                </label>
                <select name="Q6">
                  {questions[5]?.answers.map((el, idx) => {
                    return (
                      <option value={el} key={idx}>
                        {el}
                      </option>
                    );
                  })}
                </select>
              </form>
            )}
            <div className={styles.buttonsContainer}>
              {stepperIndex !== 0 && (
                <button
                  className="btn-variant-3"
                  onClick={() =>
                    setStepperIndex(prev => (prev === 0 ? 0 : prev - 1))
                  }
                >
                  Previous
                </button>
              )}
              <button
                className="btn-variant-2"
                onClick={async e => {
                  if (stepperIndex === 2) {
                    const data: {
                      [key: string]: any;
                    } = {};

                    if (form2Ref.current) {
                      const formData2 = new FormData(form2Ref.current);
                      formData2.forEach((value, key) => {
                        data[key] = value;
                      });
                    }
                    if (form1Ref.current) {
                      const formData1 = new FormData(form1Ref.current);
                      formData1.forEach((value, key) => {
                        data[key] = value;
                      });
                    }

                    console.log('data', data);
                    setForm(prev => ({ ...prev, ...data }));
                    // Login first
                    const loginResponse = await userService.login(
                      form.email,
                      form.password
                    );
                    console.log('login', loginResponse[1]);
                    dispatch(setUser(loginResponse[1].user[0]));

                    const res = await surveyService.answerQuestionnaire(
                      user.id,
                      { ...form, ...data }
                    );
                    if (res[0] === 0) {
                      navigate('/dashboard');
                    }
                    console.log('form and res', { form, res });
                    return;
                  }

                  const data: {
                    [key: string]: any;
                  } = {};

                  if (form2Ref.current) {
                    const formData2 = new FormData(form2Ref.current);
                    formData2.forEach((value, key) => {
                      data[key] = value;
                    });
                  }
                  if (form1Ref.current) {
                    const formData1 = new FormData(form1Ref.current);
                    formData1.forEach((value, key) => {
                      data[key] = value;
                    });
                  }

                  setForm(prev => ({ ...prev, ...data }));
                  // navigate('/pricing');

                  setStepperIndex(prev => (prev === 2 ? 0 : prev + 1));
                  // navigate('/dashboard');
                }}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const StepperRadioButton = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  const radioRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    radioRef.current?.click();
  };
  return (
    <div className={styles.stepperRadioButton} onClick={handleClick}>
      <input ref={radioRef} type="radio" name={name} value={label} />
      <label>{label}</label>
    </div>
  );
};

export default RightComponent;
