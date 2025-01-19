import { Row, Col, Stack } from "react-bootstrap";

import AppleEmoji from "components/AppleEmoji";
import CircularText from "components/home/CircularText";

import resumeFile from "resources/doc/Giulia-Manno_CV.pdf"

export default function GreetingRow() {
    return (
        <Row className="gap-4 px-4 px-sm-0" id="home">
            {/* greeting panel */}
            <Col className="rounded-5 greeting-panel">
                <h1 id="greetingTitle" className="greeting-header display-font d-flex align-items-center">
                    hi, i'm giulia! <AppleEmoji className="ms-4" name="sparkles" />
                </h1>

                <Stack gap={4}>
                    <h2>I'm a well-versed <mark><span>Product Designer</span></mark> with years of experience in tech.</h2>
                    <p className="subtitle d-none d-lg-block">I've worked in small and big companies, on small and big projects, focused on <mark><span>making ideas come true in a user-friendly way.</span></mark></p>

                    <div className="gap-4 d-flex flex-lg-column flex-row justify-content-between">
                        <div className="gap-4 gap-lg-5 d-flex flex-lg-row flex-column">
                            <a href={resumeFile} download="Giulia Manno CV" className="subtitle">
                                <AppleEmoji className="me-2" name="woman-technologist" />
                                My Resume
                            </a>

                            <a href="#work" className="subtitle">
                                <AppleEmoji className="me-2" name="pencil" />
                                Selected Work
                            </a>
                        </div>

                        <div className="d-flex flex-row align-items-end justify-content-end">
                            <a href="#contact" className="highlightable contact-link">
                                <h3 className="link-underline">
                                    <span className="display-font">
                                        let's chat!
                                        <em className="arrow body-text">&nbsp;&#8594;</em>
                                    </span>
                                </h3>
                            </a>
                        </div>
                    </div>
                </Stack>
            </Col>

            {/* profile picture */}
            <Col md={4} className="profile-picture rounded-5 d-none d-md-block">
                <CircularText />
            </Col>
        </Row>
    );
}