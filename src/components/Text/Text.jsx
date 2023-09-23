import { Container, Typography } from "./style";

const Text = () => {
    return (
        <>
            <Container>
                <Typography fontSize="5" fontWeight="bold" color="red">
                    H1
                </Typography>
                <Typography fontSize="4" fontWeight="bold" color="red">
                    H2
                </Typography>
                <Typography fontSize="3" fontWeight="bold" color="red">
                    H3
                </Typography>
                <Typography fontSize="2" fontWeight="bold" color="red">
                    H4
                </Typography>
                <Typography fontSize="1" fontWeight="bold" color="red">
                    H5
                </Typography>
                <Typography fontSize="1" fontWeight="bold" color="red">
                    H6
                </Typography>
                <Typography fontSize="1" fontWeight="" color="red">
                    p
                </Typography>
            </Container>
        </>
    );
}

export default Text;
