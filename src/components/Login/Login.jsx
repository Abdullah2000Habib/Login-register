import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { PATH } from "../../constants";
import Button from "../Button";
import schema from '../utils/loginSchema';
import { AccountSignUpWrapper, InputField, InputsWrapper, LoginFormWrapper, LoginTitle, LoginWrapper, Span } from "./style";
const Login = () => {
    return (
        <LoginWrapper>
            <LoginFormWrapper>
                <LoginTitle>Welcome back</LoginTitle>
                <Formik
                initialValues={{
                    email:'',
                    password:'' 
                }}

                onSubmit={(values) => {
                    console.log(values.email,values.password)
                }}

                validationSchema={schema}
                >
                
                

                {({errors,touched}) => (

                    <Form>
                        {/* {console.log(errors,"errors")}
                        {console.log(touched,"touched")} */}
                        <InputsWrapper>
                            <InputField placeholder="Enter Your Email" type="email" name="email"/>
                            {errors.email && touched.email ?<small className="danger">{errors.email}</small>:null}
                            <InputField placeholder="Enter Your Password" type="password" name="password"/>
                            {errors.password && touched.password ?<small className="danger">{errors.password}</small>:null}
                            <Button title="Log in"/>
                            <AccountSignUpWrapper>
                                <Span>Don’t have an account?</Span>
                                <Link to={PATH.REGISTER}>Sign up</Link>
                            </AccountSignUpWrapper>
                        </InputsWrapper>
                    </Form>
                )}
                </Formik>
            </LoginFormWrapper>
        </LoginWrapper>
    );
}

export default Login;
