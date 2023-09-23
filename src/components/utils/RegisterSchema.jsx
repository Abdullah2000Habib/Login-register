import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().max(15).required(),
    email: Yup.string().email('Invalid email address').required('email is required'),
    password: Yup.string().min(4).required(),
});


export default schema ;