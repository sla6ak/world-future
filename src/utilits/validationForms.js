import * as yup from 'yup';
export const validationRegisterSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
export const validationLoginSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const validationLordSchema = yup.object({
  nikName: yup
    .string('Enter your nikName')
    .required('Email is required')
    .min(3, 'nikName should be of minimum 3 characters length')
    .max(9, 'nikName should be of minimum 9 characters length'),
  rassa: yup.string('click to rassa').required('Rassa is required'),
});
