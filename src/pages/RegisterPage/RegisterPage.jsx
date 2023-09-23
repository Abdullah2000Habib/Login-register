
import img from "../../assets/images/image.png";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide";
import Register from "../../components/Register";
import { RegisterPageWrapper } from "./style";
const RegisterPage = () => {
    return (
        <>
        <Header/>
                <RegisterPageWrapper>
            <Register/>
            <LeftSide img={img}/> 
        </RegisterPageWrapper>
        </>

    );
}

export default RegisterPage;
