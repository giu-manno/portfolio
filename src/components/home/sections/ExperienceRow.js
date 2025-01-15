import { Row, Col } from "react-bootstrap";

import figmaLogo from "resources/img/home/figmaLogo.svg";
import agileLogo from "resources/img/home/agileLogo.svg";

import ExperienceCarousel from "components/home/ExperienceCarousel"
import AppleEmoji from "components/AppleEmoji";

export default function ExperienceRow() {
    return (
        <Row className="gap-4">
            {/* experience section */}
            <Col className="d-flex flex-column">
                <Row className="mb-4">
                    <h3 className="p-0 display-font">my experience</h3>
                </Row>

                <Row id="experience" className="p-4 bg-secondary rounded-5 flex-fill">
                    <ExperienceCarousel />
                </Row>
            </Col>

            {/* education section */}
            <Col>
                <Row className="mb-4">
                    <h3 className="p-0 display-font text-end">education & skills</h3>
                </Row>

                <Row id="education" className="gap-4">
                    <Col xs={7} className="p-4 bg-secondary rounded-5">
                        <div className="w-100 h-100 gap-2 d-flex flex-column py-4 px-3">
                            <div className="d-flex flex-column gap-1">
                                <h3 className="mb-2"><AppleEmoji name={"woman-student"} /></h3>
                                <b>Bachelor's Degree in Design</b>
                                <span>
                                    <a target="_blank" href="https://ufsc.br" rel="noopener noreferrer" style={{textDecorationThickness: "1px"}} className="highlightable">
                                        Federal University of Santa Catarina (UFSC)
                                    </a>
                                    <p>2019 - 2024</p>
                                </span>
                            </div>

                            <hr />

                            <div className="d-flex flex-column flex-fill skill-list">
                                <b className="flex-fill">
                                    <AppleEmoji name="wheelchair-symbol" className="me-3 fs-4" />
                                    Digital Accessibility
                                </b>

                                <b className="flex-fill">
                                    <AppleEmoji name="triangular-ruler" className="me-3 fs-4" />
                                    Design Systems
                                </b>

                                <b className="flex-fill">
                                    <AppleEmoji name="magnifying-glass-tilted-left" className="me-3 fs-4" />
                                    User Research
                                </b>

                                <b className="flex-fill">
                                    <AppleEmoji name="compass" className="me-3 fs-4" />
                                    Information Architecture
                                </b>

                                <b className="flex-fill">
                                    <AppleEmoji name="writing-hand" className="me-3 fs-4" />
                                    Wireframes and Prototyping
                                </b>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <Row className="square p-3 bg-secondary rounded-5 mb-4 skill-card">
                            <div className="h-100 w-100 d-flex flex-row align-items-center">
                                <img src={figmaLogo} alt="Figma icon" className="svg-shadow-sm w-75" />
                                <div className="d-flex flex-column align-items-center">
                                    <b>+4 years</b>
                                    <p className="text-center">designing on Figma</p>
                                </div>
                            </div>
                        </Row>

                        <Row className="square p-3 bg-secondary rounded-5 skill-card">
                            <div className="h-100 w-100 d-flex flex-row align-items-center">
                                <img src={agileLogo} alt="Figma icon" className="svg-shadow-sm w-75" />
                                <div className="d-flex flex-column align-items-center">
                                    <b>+2 years</b>
                                    <p className="text-center">working with Agile Methods</p>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}