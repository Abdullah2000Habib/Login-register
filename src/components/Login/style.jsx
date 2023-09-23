import { Field } from "formik";
import styled from "styled-components";

export const LoginWrapper=styled('div')`
    width:50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const LoginFormWrapper=styled('div')`
width: 50%;
display: flex;
flex-direction: column;
gap:0.2rem;
`
export const LoginTitle=styled('h3')`
font-size: 30px;
font-weight: 500;
text-align: center;
color:black;
`
export const InputsWrapper=styled('div')`
display: flex;
flex-direction: column;
gap:1.5rem;

`
export const InputField=styled(Field)`
padding: 0.8rem;
outline:none;
border-radius: 6px;
border:1px solid rgba(0,0,0,0.4);
&::placeholder{
    font-weight: 500;
    font-size:0.9rem;
}

`
export const AccountSignUpWrapper=styled('div')`
display: flex;
align-items: center;
gap:2rem;

&> a {
    font-size: 0.9rem;
    color: black;
}

`
export const Span=styled('span')`
font-size: 0.9rem;
color: #a5a5a5;;

`
