import { Row, Col, Stack } from "react-bootstrap";

import AppleEmoji from "components/AppleEmoji";
import CircularText from "components/home/CircularText";

export default function GreetingRow() {
    return (
        <Row className="gap-4" id="home">
            {/* greeting panel */}
            <Col lg={{ order: 0 }} xs={{ order: 1 }} className="bg-secondary rounded-5 greeting-panel">
                <h1 className="greeting-header display-font d-flex align-items-center">hi, i'm giulia! <AppleEmoji className="ms-4" name="sparkles" /></h1>

                <Stack gap={4}>
                    <h2>I'm a well-versed <mark><span>Product Designer</span></mark> with years of experience in tech.</h2>
                    <p className="subtitle">I've worked in small and big companies, on small and big projects, focused on <mark><span>making ideas come true in a user-friendly way.</span></mark></p>

                    <Stack gap={5} direction="horizontal">
                        <a href="#about" className="subtitle">
                            <AppleEmoji className="me-2" name="woman-technologist" />
                            About Me
                        </a>

                        <a href="#work" className="subtitle">
                            <AppleEmoji className="me-2" name="pencil" />
                            Selected Work
                        </a>
                    </Stack>

                    <div className="w-100 h-100 d-flex flex-row align-items-end justify-content-end">
                        <a href="#contact" className="highlightable contact-link">
                            <h3 className="link-underline">
                                <span className="display-font">
                                    let's chat!
                                    <em className="arrow">&nbsp;&#8594;</em>
                                </span>
                            </h3>
                        </a>
                    </div>
                </Stack>
            </Col>

            {/* profile picture */}
            <Col lg={{ span: 4, order: 1 }} xs={{ order: 0 }} className="profile-picture rounded-5">
                <CircularText />
            </Col>
        </Row>
    );
}