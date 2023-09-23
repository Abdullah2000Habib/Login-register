import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('email is required'),
  password: Yup.string().min(4).required(),
});


export default schema ;