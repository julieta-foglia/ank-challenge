import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required().positive().integer(),
});
