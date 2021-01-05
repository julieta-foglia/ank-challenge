import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.number().required().positive().integer(),
  email: yup.string().email(),
  phone: yup.number()
});