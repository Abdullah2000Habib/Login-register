import img from "../../assets/images/login.png";
import Header from "../../components/Header/Header";
import LeftSide from "../../components/LeftSide";
import Login from "../../components/Login";
import { LoginPageWrapper } from "./style";
const LoginPage = () => {
    return (
        <>  <Header/>
            <LoginPageWrapper>
                <Login/>
                <LeftSide img={img}/> 
            </LoginPageWrapper>
        </>
    );
}

export default LoginPage;
