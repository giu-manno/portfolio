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
                <div className="px-sm-0 px-4">
                    <Row className="mb-lg-4 mb-sm-3 mb-2">
                        <h3 className="p-0 display-font">my experience</h3>
                    </Row>

                    <Row id="experience" className="p-4 pt-1 pb-4 bg-secondary rounded-5 flex-fill">
                        <ExperienceCarousel />
                    </Row>
                </div>
            </Col>

            {/* education section */}
            <Col xl={6} className="d-flex flex-column">
                <div className="px-sm-0 px-4 d-flex flex-column flex-fill">
                    <Row className="mb-lg-4 mb-sm-3 mb-2">
                        <h3 className="p-0 display-font text-xl-end">education & skills</h3>
                    </Row>

                    <Row id="education" className="flex-fill gap-4">
                        <Col xl={7} md={6} className="px-4 py-lg-4 py-3 bg-secondary rounded-5">
                            <div className="w-100 h-100 gap-2 d-flex flex-column">
                                <div className="d-flex flex-column gap-1">
                                    <h3 className="mb-2 d-xl-block d-none">
                                        <AppleEmoji name={"woman-student"} />
                                    </h3>
                                    <AppleEmoji className='align-self-lg-start align-self-center d-xl-none d-block mb-2' name={"woman-student"} width='2.5rem' />
                                    
                                    <b className="d-xl-block d-none">Bachelor's Degree in Design</b>
                                    <b className="subtitle text-lg-start text-center d-xl-none d-block">Bachelor's Degree in Design</b>
                                    
                                    <span className="text-lg-start text-center">
                                        <a target="_blank" href="https://ufsc.br" rel="noopener noreferrer" style={{textDecorationThickness: "1px"}} className="highlightable">
                                            <span>Federal University of Santa Catarina (UFSC)</span>
                                        </a>
                                        <p>2019 - 2024</p>
                                    </span>
                                </div>

                                <hr className="d-xl-block d-none" />

                                <div className="d-xl-flex d-none flex-column flex-fill skill-list">
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

                        <Col className="p-0 d-flex flex-xl-column flex-row gap-4">
                            <Col className="p-3 bg-secondary rounded-5 skill-card">
                                <div className="h-100 w-100 d-flex flex-row align-items-center">
                                    <img src={figmaLogo} alt="Figma icon" className="svg-shadow-sm" />
                                    <div className="d-flex flex-column align-items-center">
                                        <b>+4 years</b>
                                        <p className="text-center">designing on Figma</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className="p-3 bg-secondary rounded-5 skill-card">
                                <div className="h-100 w-100 d-flex flex-row align-items-center">
                                    <img src={agileLogo} alt="Figma icon" className="svg-shadow-sm" />
                                    <div className="d-flex flex-column align-items-center">
                                        <b>+2 years</b>
                                        <p className="text-center">working with Agile Methods</p>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}