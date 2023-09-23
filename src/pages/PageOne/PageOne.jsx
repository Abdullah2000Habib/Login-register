import Header from "../../components/Header";
import Text from "../../components/Text";
import { Container } from "../../components/Text/style";
import { PageOneWrapper } from "./style";

const PageOne = () => {
    return (
        <PageOneWrapper>
            <Header/>
            <Container>
                            Home Page
            <Text/>
            </Container>
        </PageOneWrapper>
    );
}

export default PageOne;
