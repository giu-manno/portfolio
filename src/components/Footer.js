import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import 'styles/footer.scss';

import AppleEmoji from "./AppleEmoji";

import { WindowSizeContext } from "App";

export default function Footer() {
    const windowBreakpoint = useContext(WindowSizeContext);

    return (
        <div className="px-sm-0 px-4">
            <Container id="contact" className="mb-4 bg-primary rounded-5 p-md-5 p-4 text-white">
                <Row className="gap-4 py-lg-4 py-md-2 px-md-0 pb-md-2 p-sm-2 pb-sm-3 pb-2">
                    <Col>
                        <h3 className="m-0 footer-title display-font">let's chat!</h3>
                        <div className="d-flex flex-row align-items-center mt-3">
                            <AppleEmoji name="open-mailbox-with-raised-flag" className="me-3" width={windowBreakpoint === 'md' ? '3rem' : '1.5rem'} />
                            <p className="subtitle footer-text">
                                reach me at <br className="d-md-none d-block" /><a className="text-white" href="mailto:mannogiu@gmail.com">{windowBreakpoint === 'xs' ? 'my email' : 'mannogiu@gmail.com'}</a>
                            </p>
                        </div>
                    </Col>

                    <Col>
                        <div className="w-100 h-100 d-flex flex-column align-items-end justify-content-end">
                            <div>
                                <p className="subtitle footer-text">other links:</p>
                                <div className="d-flex flex-row gap-4">
                                    <a className="text-white display-font subtitle footer-text" target="_blank" rel="noopener noreferrer" href="https://www.behance.net/giulia_manno">
                                        behance
                                    </a>

                                    <a className="text-white display-font subtitle footer-text" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/giulia-manno-88681a144">
                                        linkedin
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export function ProjectFooter({ nextProjectName, nextProjectSrc}) {
    return (
        <Container id="contact" className="mb-4 w-100 bg-primary rounded-5 p-5 text-white">
            <Row className="py-4">
                <Col>
                    <h3 className="m-0 display-font">like what you see?</h3>
                    <p className="subtitle mt-3">
                        <AppleEmoji name="open-mailbox-with-raised-flag" className="me-3" />
                        reach me at <a className="text-white" href="mailto:mannogiu@gmail.com">mannogiu@gmail.com</a>
                    </p>
                    <p className="subtitle mt-3">
                        or at my <a className="text-white display-font subtitle" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/giulia-manno-88681a144">linkedin</a>
                    </p>
                </Col>

                {/* <Col>
                    <div className="w-100 h-100 d-flex flex-column align-items-end">
                        <h3 className="m-0 display-font">next project</h3>
                        <p className="subtitle mt-3">
                            <a href={nextProjectSrc} className="contact-link highlightable-inverted">{nextProjectName}<span className="arrow"> &#8594;</span></a>
                        </p>
                    </div>
                </Col> */}
            </Row>
        </Container>
    );
}