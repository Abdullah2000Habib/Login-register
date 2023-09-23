import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { PATH } from "../../constants";
import Button from "../Button";
import schema from '../utils/RegisterSchema';
import { AccountSignUpWrapper, InputField, InputsWrapper, RegisterFormWrapper, RegisterTitle, RegisterWrapper, Span } from "./style";
const Register = () => {
    return (
        <RegisterWrapper>
            <RegisterFormWrapper>
                <RegisterTitle>Create account</RegisterTitle>
                <Formik
                initialValues={{
                    email:'',
                    password:'' ,
                    name:'' 
                }}

                onSubmit={(values) => {
                    console.log(values.email,values.password,values.name)
                }}

                validationSchema={schema}
                >
                
                

                {({errors,touched}) => (

                    <Form>
                        {/* {console.log(errors,"errors")}
                        {console.log(touched,"touched")} */}
                        <InputsWrapper>
                            <InputField placeholder="Enter Your Name" type="text" name="name"/>
                            {errors.name && touched.name ?<small className="danger">{errors.name}</small>:null}
                            <InputField placeholder="Enter Your Email" type="email" name="email"/>
                            {errors.email && touched.email ?<small className="danger">{errors.email}</small>:null}
                            <InputField placeholder="Enter Your Password" type="password" name="password"/>
                            {errors.password && touched.password ?<small className="danger">{errors.password}</small>:null}
                            <Button title="Create Account"/>
                            <AccountSignUpWrapper>
                                <Span>Already have an account?</Span>
                                <Link to={PATH.LOGIN}>Log in</Link>
                            </AccountSignUpWrapper>
                        </InputsWrapper>
                    </Form>
                )}
                </Formik>
            </RegisterFormWrapper>
        </RegisterWrapper>
    );
}

export default Register;
