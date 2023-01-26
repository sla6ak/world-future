import * as yup from 'yup'

// yup.addMethod(
//   yup.string,
//   'nikName',
//   function (nikName, message = 'only english') {
//     const nikNameRules = /[a-zA-Z]d+[a-zA-Z]{3,30}/

//     return this.test({
//       message,
//       test: (value) =>
//         value === null ||
//         value === '' ||
//         value === undefined ||
//         nikNameRules.test(value)
//     })
//   }
// )

export const validationRegisterSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})
export const validationLoginSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})

export const validationLordSchema = yup.object({
  nikName: yup
    .string('Enter your nikName')
    .test('nikName', 'only english, no number start!', (val) =>
      /^[A-Za-z]+[A-Za-z0-9]/.test(val)
    )
    .required('nikName is required')
    .min(3, 'nikName should be of minimum 3 characters length')
    .max(9, 'nikName should be of maximum 9 characters length'),
  race: yup.string('click to rassa').required('Rassa is required')
})

export const validationLetterSchema = yup.object({
  author: yup
    .string('How are you?')
    .required('nikName is required')
    .min(3, 'nikName should be of minimum 3 characters length')
    .max(9, 'nikName should be of maximum 9 characters length'),
  race: yup.string('bug rassa').required('Rassa is required'),
  message: yup
    .string('click to rassa')
    .min(5, 'letter should be of minimum 3 characters length')
    .max(60, 'letter should be of maximum 9 characters length')
    .required('Rassa is required'),
  clan: yup.string('clan error'),
  status: yup.string('clan error'),
  planet: yup.string('planet error')
})
