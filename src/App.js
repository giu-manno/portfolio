import React from "react";
import { Outlet } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import { Container } from "react-bootstrap";

import Header from "components/Header";

function App() {
    return (
        <ParallaxProvider>
        <Container fluid className='p-0 d-flex flex-column'>
            <Header />
            <Outlet />
        </Container>
        </ParallaxProvider>
    );
}

export default App;
