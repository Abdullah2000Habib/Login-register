import { Link } from "react-router-dom";
import { PATH } from "../../constants";
import { Container } from "../Text/style";
import { HeaderBg, HeaderWrapper, LI } from "./style";

const Header = () => {
    return (
            <HeaderBg>
                <Container>
                    <HeaderWrapper>
                            <LI><Link to={PATH.HOME}>Home</Link></LI>
                            <LI><Link to={PATH.ABOUT}>About</Link></LI>
                    </HeaderWrapper>
            </Container>
            </HeaderBg>

    );
}

export default Header;
