import { ButtonWrapper } from "./style";

const Button = ({title}) => {
    return (
        <>
            <ButtonWrapper type="submit">{title}</ButtonWrapper>
        </>
    );
}

export default Button;
