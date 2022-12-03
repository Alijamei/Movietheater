import * as yup from 'yup';

export let schema = yup.object().shape({
  name: yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
  password: yup.string().min(5).max(10).required('password required'),
 
}); 