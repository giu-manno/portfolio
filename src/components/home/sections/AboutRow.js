import { Row, Col } from "react-bootstrap";

import aboutPicture from "resources/img/home/about.png"

import AppleEmoji from "components/AppleEmoji";

export default function AboutRow() {
    return (
        <Row className="gap-5 ps-4 py-5 px-5 bg-secondary rounded-5" id="about">
            <Col xs={5} className="about-picture">
                <img src={aboutPicture} alt="about me" />
            </Col>

            <Col className="d-flex flex-column justify-content-center">
                <h2 className="d-flex align-items-center mb-4"><AppleEmoji className="me-4" name="handshake" width="4.5rem" />Connecting people is my passion.</h2>

                <p className="subtitle mb-3">That's why I'm a Designer, reconciling user needs with digital market innovations.</p>
                <p className="mb-3">I've recently been studying Accessibility in graphical interfaces, aiming to make the internet a more inclusive environment for everyone.</p>
                <p className="mb-3">The main tool I use to make mine and other's ideas come true is Figma - I've mainly exercised this in B2B, enterprise systems, conducting Usability Studies, User Research, composing wireframes and advanced prototypes and building complex, functional Design Systems.</p>
            </Col>
        </Row>
    );
}