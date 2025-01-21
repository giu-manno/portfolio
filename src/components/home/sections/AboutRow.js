import { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import aboutPicture from "resources/img/home/about.webp";
import aboutPictureMobile from "resources/img/home/about-mobile.webp";

import AppleEmoji from "components/AppleEmoji";

import { WindowSizeContext } from "App";

export default function AboutRow() {
    const windowBreakpoint = useContext(WindowSizeContext);

    return (
        <div className="p-sm-0 px-4">
            <Row className="about-row rounded-5" id="about">
                <Col xl={{span: 4, order: 0}} lg={{span: 6, order: 0}} xs={{order: 1}} className="about-picture p-0">
                    <img className="d-lg-block d-none" src={aboutPicture} alt="about me" />
                    <img className="d-lg-none d-clokc" src={aboutPictureMobile} alt="about me" />
                </Col>

                <Col className="d-flex flex-column justify-content-center p-0">
                    <h2 className="d-flex align-items-center justify-content-md-start justify-content-center mb-lg-4 mb-sm-3 mb-2">
                        <AppleEmoji className="me-4 d-none d-lg-block" name="handshake" width="4.5rem" />
                        Connecting people is my passion.
                        <AppleEmoji className="ms-md-4 ms-2 d-lg-none d-block" name="handshake" width={windowBreakpoint === 'xs' ? '1em' : '4.5rem'} />
                    </h2>

                    <p className="subtitle text-sm-start text-center mb-sm-3 mb-2">That's why I'm a Designer, reconciling user needs with digital market innovations.</p>
                    <p className="d-sm-block d-none mb-lg-3">I've recently been studying Accessibility in graphical interfaces, aiming to make the internet a more inclusive environment for everyone.</p>
                    <p className="d-lg-block d-none mb-3">The main tool I use to make mine and other's ideas come true is Figma - I've mainly exercised this in B2B, enterprise systems, conducting Usability Studies, User Research, composing wireframes and advanced prototypes and building complex, functional Design Systems.</p>
                </Col>
            </Row>
        </div>
    );
}