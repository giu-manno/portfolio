import { useEffect } from "react";
import { Row, Col, Container, Stack, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import useDetectScroll from '@smakss/react-scroll-direction';

import ParallaxImage from "components/project/ParallaxImage";
import { imageList } from "components/project/ades/ImageList";
import { ProjectFooter } from "components/Footer";

export default function AdesPage({ setActiveSection, setImageIndex }) {
    const { ref: overviewRef, inView: overviewInView } = useInView({ rootMargin: "-20% 0px -30% 0px" });
    const { ref: challengesRef, inView: challengesInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: wireframesRef, inView: wireframesInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: testsRef, inView: testsInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: resultsRef, inView: resultsInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: contactRef, inView: contactInView } = useInView({ rootMargin: "10% 0px -10% 0px" });

    const { scrollDir } = useDetectScroll();

    useEffect(() => {
        if (scrollDir === "down") {
            if (contactInView) setActiveSection(5);
            else if (resultsInView) setActiveSection(4);
            else if (testsInView) setActiveSection(3);
            else if (wireframesInView) setActiveSection(2);
            else if (challengesInView) setActiveSection(1);
            else if (overviewInView) setActiveSection(0);
        } else {
            if (overviewInView) setActiveSection(0);
            else if (challengesInView) setActiveSection(1);
            else if (wireframesInView) setActiveSection(2);
            else if (testsInView) setActiveSection(3);
            else if (resultsInView) setActiveSection(4);
            else if (contactInView) setActiveSection(5);
        }
    }, [contactInView, resultsInView, testsInView, wireframesInView, challengesInView, overviewInView, scrollDir, setActiveSection]);

    return (
        <Container>
            <Stack gap={5}>
                <div ref={overviewRef} className="d-flex flex-column gap-5">
                    {/* title */}
                    <h1>Ades - a user-friendly digital signature platform.</h1>

                    {/* project details */}
                    <Row id="overview" className="gap-4">
                        <ParallaxImage src={imageList[0].src} onClick={() => setImageIndex(0)} />

                        <Col xs={3} className="bg-secondary rounded-5 p-4">
                            <div className="h-100 d-flex flex-column gap-4 mx-2 my-0">
                                <h2 className="display-font">project details</h2>

                                <span>
                                    <p className="annotations">Company</p>
                                    <p>Laboratory of Computer Security (LabSEC - UFSC)</p>
                                </span>

                                <span>
                                    <p className="annotations">Timeline</p>
                                    <p>April - December 2023</p>
                                </span>

                                <span>
                                    <p className="annotations">Role and Activities</p>
                                    <p>For this project, I handled the full journey of exploration, research, prototyping, testing and documentation. As the only Designer, I wore many hats, helping with requirements and specifications for developers.</p>
                                </span>
                            </div>
                        </Col>
                    </Row>

                    {/* introduction and overview */}
                    <Row className="gap-4 pt-3">
                        <Col className="bg-secondary rounded-5 introduction-panel">
                            <h3 className="display-font introduction-header">overview</h3>

                            <div className="d-flex flex-column gap-4">
                                <p className="subtitle">
                                    With the advance of information exchange in the digital realm, <b>data protection and security have become an increasing concern when creating interfaces.</b>
                                </p>
                                <p>
                                    However, a system's security requirements often manifest in ways that conflict with user needs. This was the issue that my client, a Computer Security lab, seldom faced, and what motivated them to initiate this project with me.
                                    They had developed a new technology for digital signing, and wanted to materialize and put it to test through a brand-new <b>digital signature platform.</b>
                                </p>
                            </div>
                        </Col>

                        <Col>
                            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                <h2 className="text-center">“We need to develop a web-based, digital signature platform, that is easy to use, even with complex functionatilities.”</h2>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <ParallaxImage
                            src={imageList[1].src}
                            className="viewport-panel"
                            children={
                                <Button href="#results" onClick={(e) => {e.stopPropagation();}} className="results-button rounded-5 fs-5">
                                    Click here if you want to go straight to the results!
                                </Button>
                            }
                            onClick={() => setImageIndex(1)} />
                    </Row>
                </div>

                {/* challenges */}
                <Row ref={challengesRef} id="challenges" className="gap-4">
                    <Col xs={3}>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <h3 className="display-font">discovering the challenges</h3>
                        </div>
                    </Col>

                    <Col>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <div className="d-flex flex-column gap-3">
                                <p>My client had extensive knowledge about most competitors' internal and technological functioning for their products and a firm belief that what they had come up with was unique and better for the end user. Even so, they lacked information about the user experience on other platforms, the users' pains and needs, and <b>how they could do better.</b></p>
                                <p>This led us to conduct a <b>user survey</b> focusing on people who had already utilized some form of digital signature. Our survey ended up gathering over <b>200 responses</b>, making it easier to map out which signing platforms were the most utilized and what their users' challenges and motivations were.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="gap-4">
                    <Col className="bg-secondary rounded-5 p-4">
                        <div className="h-100 d-flex flex-column gap-2 mx-2 my-0">
                            <h5 className="display-text">User says:</h5>
                            <p>“I don't like going through an extensive and complicated process every single time I try to sign something.”</p>
                        </div>
                    </Col>

                    <Col className="bg-secondary rounded-5 p-4">
                        <div className="h-100 d-flex flex-column gap-2 mx-2 my-0">
                            <h5 className="display-text">User says:</h5>
                            <p>“The steps for authenticating and setting up my document for signing are too bureaucratic and/or take too long.”</p>
                        </div>
                    </Col>

                    <Col className="bg-secondary rounded-5 p-4">
                        <div className="h-100 d-flex flex-column gap-2 mx-2 my-0">
                            <h5 className="display-text">User says:</h5>
                            <p>“There are too many unecessary functionalities and it's hard to understand when you're a first-time user.”</p>
                        </div>
                    </Col>
                </Row>

                <Row className="gap-5">
                    <Col>
                        <div className="d-flex flex-column h-100 justify-content-center gap-3">
                            <p>My client had extensive knowledge about most competitors' internal and technological functioning for their products and a firm belief that what they had come up with was unique and better for the end user. Even so, they lacked information about the user experience on other platforms, the users' pains and needs, and <b>how they could do better.</b></p>
                            <p>This led us to conduct a <b>user survey</b> focusing on people who had already utilized some form of digital signature. Our survey ended up gathering over <b>200 responses</b>, making it easier to map out which signing platforms were the most utilized and what their users' challenges and motivations were.</p>
                            <p>This presented our opportunity:<br />to create a <b>public, free platform that is easy to use, even with high-level functionalities.</b></p>
                        </div>
                    </Col>

                    <Col>
                        <ParallaxImage parallaxSpeed={0} src={imageList[2].src} onClick={() => setImageIndex(2)} className="challenges-image shadow-none" />
                    </Col>
                </Row>

                {/* wireframes */}
                <Row ref={wireframesRef} id="wireframes" className="py-4 gap-4">
                    <Col xs={3}>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <h3 className="display-font">wireframes</h3>
                        </div>
                    </Col>

                    <Col>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <p>The data from the discovery stage was essential for establishing the first iteration of prototypes and user flows, in a low-fidelity manner.  These wireframes described the flows for signing a document digitally, and were tested for possible usability issues, and to validate the suppositions that were made so far.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <ParallaxImage parallaxSpeed={0} src={imageList[3].src} onClick={() => setImageIndex(3)} className="viewport-panel teste bg-secondary" />
                </Row>

                {/* tests and validation */}
                <Row ref={testsRef} id="tests" className="gap-4">
                    <Col>
                        <div className="w-100 h-100 d-flex flex-column gap-4 justify-content-center">
                            <h3 className="display-font">tests and validation</h3>
                            <p>The wireframes underwent validation through a usability test, executed by a focal group; there were nine participants, divided in two groups of four and five people, each with a smartphone device containing the prototypes.</p>
                            <p>This test was essential to validate the general navigation of the interface, as well as the disposition of elements and functionalities and their ease-of-use. The participants were encouraged to use the think-out-loud method to reach conclusions among the group, and they received paper and pens to take notes of their perceptions.</p>
                            <p>After both groups finished their flows, the table discussed their thoughts and conclusions on what parts they liked and disliked the most. This input was essential in forming the final solution, as it helped lapidate the best course of action in terms of interaction and navigation.</p>
                        </div>
                    </Col>

                    <Col>
                        <Row>
                            <ParallaxImage src={imageList[4].src} onClick={() => setImageIndex(4)} className="horizontal-rectangle mb-4" />
                        </Row>

                        <Row>
                            <ParallaxImage src={imageList[5].src} onClick={() => setImageIndex(5)} className="horizontal-rectangle" />
                        </Row>
                    </Col>
                </Row>

                <Row className="gap-4">
                    <ParallaxImage parallaxSpeed={-5} src={imageList[6].src} onClick={() => setImageIndex(6)} className="square" />

                    <ParallaxImage parallaxSpeed={-5} src={imageList[7].src} onClick={() => setImageIndex(7)} className="square" />
                </Row>
                
                {/* results */}
                <Row ref={resultsRef} id="results" className="py-4 gap-4">
                    <Col xs={3}>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <h3 className="display-font">results</h3>
                        </div>
                    </Col>

                    <Col>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <p>The full scope of the prototype consists of three navigable "routes" that encompass the experience of signing a document, preparing and signing a document and only preparing a document for third-party signature. The interactive prototype served not only as a deliverable for the client, but as documentation for their developers, since the product is set to be launched publicly in the next few years.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="p-0">
                        <iframe
                            title="ADES - Figma project"
                            className="viewport-panel rounded-5 shadow-sm w-100"
                            src="https://embed.figma.com/proto/C4GEKRoJcTj55scYMjeSuP/TELAS-MOBILE?node-id=1252-8712&p=f&scaling=scale-down&content-scaling=fixed&page-id=1147%3A19431&starting-point-node-id=1252%3A8712&show-proto-sidebar=0&embed-host=share"
                            allowFullScreen>
                        </iframe>
                    </Col>
                </Row>

                {/* footer */}
                <Row ref={contactRef}>
                    <ProjectFooter nextProjectName="FINDI - Digital Entertainment App" nextProjectSrc="#contact" />
                </Row>
            </Stack>
        </Container>
    );
}