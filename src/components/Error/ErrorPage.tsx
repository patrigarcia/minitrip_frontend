import Box from "@mui/system/Box";

// import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // const error = useRouteError();
    // const pageNotFound = `${error.status} ~ Page not found!`;
    // const unexpectedError = `${error.status} ~ Unexpected error :(`;

    return (
        <Box ml="30%">
            {/* {isRouteErrorResponse(error) ? <Image w="100%" src={pageNotFoundImg} /> : <Image w="60%" src={serverErrorImg} />}
            <Text as="b">{isRouteErrorResponse(error) ? pageNotFound : unexpectedError}</Text>
            <Link color="purple" to="/">
                <Text as="b" color="purple.600">
                    <br /> Return home
                </Text>
            </Link> */}
        </Box>
    );
};

export default ErrorPage;
