import { useRouteError } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container className="flex-fill">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error occurred...</p>

            <Alert variant='danger'>
                <Alert.Heading>{`Error ${error.status} - ${error.statusText || error.message}`}</Alert.Heading>
                {error.data}
            </Alert>
        </Container>
    );
}