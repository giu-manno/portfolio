import { useEffect } from "react";
import { Row, Col, Container, Stack, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import useDetectScroll from '@smakss/react-scroll-direction';

import ParallaxImage from "components/project/ParallaxImage";
import { imageList } from "components/project/ades/ImageList";
import Footer from "components/Footer";

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
            <Stack className="gap-4 gap-xl-5">
                <div ref={overviewRef} className="d-flex flex-column gap-4 gap-xl-5 px-4 px-sm-0">
                    {/* title */}
                    <Row id="overview">
                        <h1 className="p-0">Ades - a user-friendly digital signature platform.</h1>
                    </Row>

                    {/* project details */}
                    <Row className="gap-4 gap-xl-5">
                        <ParallaxImage className="detail-image" src={imageList[0].src} onClick={() => setImageIndex(0)} />

                        <Col xl={3} lg={4} className="bg-secondary rounded-5 p-4 position-relative mt-3 mt-lg-0">
                            <div className="h-100 d-flex flex-column gap-3 gap-xl-4 mx-0 mx-md-2 my-0">
                                <h2 className="display-font d-none d-lg-block">project details</h2>
                                <h3 className="display-font introduction-header d-block d-lg-none">project details</h3>

                                <div className="gap-3 gap-xl-4 d-flex flex-row flex-lg-column">
                                    <span className="flex-fill flex-basis-0">
                                        <p className="annotations">Company</p>
                                        <p className="details">Laboratory of Computer Security (LabSEC - UFSC)</p>
                                    </span>

                                    <span className="flex-fill flex-basis-0">
                                        <p className="annotations">Timeline</p>
                                        <p className="details">April - December 2023</p>
                                    </span>
                                </div>

                                <span>
                                    <p className="annotations">Role and Activities</p>
                                    <p className="details d-block d-md-none">UX Research - UX Design - Product Design</p>
                                    <p className="details d-none d-md-block">For this project, I handled the full journey of exploration, research, prototyping, testing and documentation. As the only Designer, I wore many hats, helping with requirements and specifications for developers.</p>
                                </span>
                            </div>
                        </Col>
                    </Row>

                    {/* introduction and overview */}
                    <Row className="gap-4 pt-3">
                        <Col className="bg-secondary rounded-5 introduction-panel">
                            <h3 className="display-font introduction-header">overview</h3>

                            <div className="d-flex flex-column gap-4 text-md-start text-center">
                                <p className="subtitle lh-1">
                                    With the advance of information exchange in the digital realm, <b>data protection and security have become an increasing concern when creating interfaces.</b>
                                </p>
                                <p className="d-none d-md-block">
                                    However, a system's security requirements often manifest in ways that conflict with user needs. This was the issue that my client, a Computer Security lab, seldom faced, and what motivated them to initiate this project with me.
                                    They had developed a new technology for digital signing, and wanted to materialize and put it to test through a brand-new <b>digital signature platform.</b>
                                </p>
                            </div>
                        </Col>

                        <Col lg={6}>
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
                                <Button href="#results" onClick={(e) => {e.stopPropagation();}} className="results-button rounded-5 fs-5 d-none d-sm-block">
                                    Click here if you want to go straight to the results!
                                </Button>
                            }
                            onClick={() => setImageIndex(1)} />
                    </Row>
                </div>

                {/* challenges */}
                <Row ref={challengesRef} id="challenges" className="gap-4">
                    <div className="gap-4 row px-4 px-sm-0">
                    <Col md={3}>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <h3 className="display-font">discovering the challenges</h3>
                        </div>
                    </Col>

                    <Col>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <div className="d-flex flex-column gap-4 gap-md-3">
                                <p>My client had extensive knowledge about most competitors' internal and technological functioning for their products and a firm belief that what they had come up with was unique and better for the end user.<br className="d-block d-md-none" /><br className="d-block d-md-none" /> Even so, they lacked information about the user experience on other platforms, the users' pains and needs, and <b>how they could do better.</b></p>
                                <p>This led us to conduct a <b>user survey</b> focusing on people who had already utilized some form of digital signature.<br className="d-block d-md-none" /><br className="d-block d-md-none" /> Our survey ended up gathering over <b>200 responses</b>, making it easier to map out which signing platforms were the most utilized and what their users' challenges and motivations were.</p>
                            </div>
                        </div>
                    </Col>
                    </div>
                </Row>

                <Row className="gap-3 gap-lg-4 px-4 px-sm-0">
                    <Col lg xs={12} className="bg-secondary rounded-5 p-3 p-sm-4">
                        <div className="h-100 d-flex flex-column gap-2 mx-2 my-0">
                            <h5 className="display-text">User says:</h5>
                            <p>“I don't like going through an extensive and complicated process every single time I try to sign something.”</p>
                        </div>
                    </Col>

                    <Col lg xs={12} className="bg-secondary rounded-5 p-3 p-sm-4">
                        <div className="h-100 d-flex flex-column gap-2 mx-2 my-0">
                            <h5 className="display-text">User says:</h5>
                            <p>“The steps for authenticating and setting up my document for signing are too bureaucratic and/or take too long.”</p>
                        </div>
                    </Col>

                    <Col lg xs={12} className="bg-secondary rounded-5 p-3 p-sm-4">
                        <div className="h-100 d-flex flex-column gap-2 mx-2 my-0">
                            <h5 className="display-text">User says:</h5>
                            <p>“There are too many unecessary functionalities and it's hard to understand when you're a first-time user.”</p>
                        </div>
                    </Col>
                </Row>

                <Row className="gap-4 gap-lg-5">
                    <Col className="px-4 px-sm-0">
                        <div className="d-flex flex-column h-100 justify-content-center gap-3">
                            <p>Through the survey responses, considering the context of the product (the lab is located in Santa Catarina, Brazil), we analyzed our biggest competitors.</p>
                            <p className="d-none d-lg-block">As we studied each platform's user interface and user experience, we concluded that <b>most complete, high-level systems belonged to big corporations focused on B2B clients.</b> While the Brazilian government made significant investments in its public signing platforms, most still lacked some important functionalities for my client and their user base, such as the capacity to co-sign documents with other parties.</p>
                            <p className="d-none d-lg-block">This presented our opportunity:<br />to create a <b>public, free platform that is easy to use, even with high-level functionalities.</b></p>
                        </div>
                    </Col>

                    <Col className="px-4 px-sm-0" lg>
                        <ParallaxImage parallaxSpeed={0} src={imageList[2].src} onClick={() => setImageIndex(2)} className="challenges-image shadow-none" />
                    </Col>

                    <Col className="px-4 px-sm-0 d-block d-lg-none">
                        <div className="d-flex flex-column h-100 justify-content-center gap-3">
                            <p>As we studied each platform's user interface and user experience, we concluded that <b>most complete, high-level systems belonged to big corporations focused on B2B clients.</b> While the Brazilian government made significant investments in its public signing platforms, most still lacked some important functionalities for my client and their user base, such as the capacity to co-sign documents with other parties.</p>
                            <p>This presented our opportunity:<br />to create a <b>public, free platform that is easy to use, even with high-level functionalities.</b></p>
                        </div>
                    </Col>
                </Row>

                {/* wireframes */}
                <Row ref={wireframesRef} id="wireframes" className="py-0 py-lg-4 gap-4">
                    <Col className="px-4 px-sm-0" lg={3}>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <h3 className="display-font">wireframes</h3>
                        </div>
                    </Col>

                    <Col className="px-4 px-sm-0">
                        <div className="w-100 h-100 d-flex align-items-center">
                            <p>The data from the discovery stage was essential for establishing the first iteration of prototypes and user flows, in a low-fidelity manner. <span className="d-none d-md-inline">These wireframes described the flows for signing a document digitally, and were tested for possible usability issues, and to validate the suppositions that were made so far.</span></p>
                        </div>
                    </Col>
                </Row>

                <Row className="px-4 px-sm-0">
                    <ParallaxImage parallaxSpeed={0} src={imageList[3].src} onClick={() => setImageIndex(3)} className="viewport-panel teste bg-secondary" />
                </Row>

                <Row className="d-block d-md-none">
                    <Col className="px-4 px-sm-0">
                        <p>The main focus here was to represent the steps of digital signature from the point of view of someone uploading a document, divided in three flows: </p>
                        <ul className="mt-3 mt-sm-4">
                            <li>when only the user needs to sign it;</li>
                            <li>when the user and other people need to sign it;</li>
                            <li>when only other people have to sign it.</li>
                        </ul>
                    </Col>
                </Row>

                {/* tests and validation */}
                <Row ref={testsRef} id="tests" className="gap-4">
                    <Col className="px-4 px-sm-0 flex-basis-0">
                        <div className="w-100 h-100 d-flex flex-column gap-4 justify-content-center">
                            <h3 className="display-font">tests and validation</h3>
                            <p>The wireframes underwent validation through a usability test, executed by a focal group; the participants were encouraged to use the <b>think-out-loud</b> method to reach conclusions among the group, and they received paper and pens to take notes of their perceptions.</p>
                            <p className="d-none d-lg-block">Because the platform offered three distinct routes with different settings and functionalities, my main concern was offering clarity in terms of which one would be selected by the user. After the test, many feedbacks found this to be a redundant stage, which added one more step to the flow.</p>
                            <p className="d-none d-lg-block">This led me to rethink the navigation structure, adding a dropdown component instead of the radio buttons, making the process more streamlined.</p>
                            <p className="d-none d-lg-block">Another big input was regarding the dashboard, that showed a preview of each uploaded document. Users found this confusing and thought that it took too much space, and I reworked the screen to a list and grid formatting.</p>
                        </div>
                    </Col>

                    <Col lg className="d-md-flex flex-column">
                        <Row className="flex-fill px-4 px-sm-0">
                            <ParallaxImage parallaxSpeed={-4} src={imageList[4].src} onClick={() => setImageIndex(4)} className="horizontal-rectangle mb-3 mb-lg-4" />
                        </Row>

                        <Row className="flex-fill px-4 px-sm-0">
                            <ParallaxImage parallaxSpeed={-4} src={imageList[5].src} onClick={() => setImageIndex(5)} className="horizontal-rectangle" />
                        </Row>
                    </Col>

                    <Col className="d-block d-lg-none px-4 px-sm-0">
                        <p className="mb-4">Because the platform offered three distinct routes with different settings and functionalities, my main concern was offering clarity in terms of which one would be selected by the user. After the test, many feedbacks found this to be a redundant stage, which added one more step to the flow.</p>
                        <p>This led me to rethink the navigation structure, adding a dropdown component instead of the radio buttons, making the process more streamlined.</p>
                    </Col>
                </Row>

                <Row className="d-lg-flex gap-4">
                    <Col className="px-4 px-sm-0">
                        <ParallaxImage parallaxSpeed={0} src={imageList[6].src} onClick={() => setImageIndex(6)} className="square" />
                    </Col>
                    
                    <Col lg className="px-4 px-sm-0">
                        <ParallaxImage parallaxSpeed={0} src={imageList[7].src} onClick={() => setImageIndex(7)} className="square" />
                    </Col>
                </Row>

                <Row className="d-block d-lg-none">
                    <Col className="px-4 px-sm-0">
                        <p>Another big input was regarding the dashboard, that showed a preview of each uploaded document. Users found this confusing and thought that it took too much space, and I reworked the screen to a list and grid formatting.</p>
                    </Col>
                </Row>
                
                {/* results */}
                <Row ref={resultsRef} id="results" className="py-0 py-lg-4 gap-4">
                    <Col className="px-4 px-sm-0" lg={3}>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <h3 className="display-font">results</h3>
                        </div>
                    </Col>

                    <Col className="px-4 px-sm-0">
                        <div className="w-100 h-100 d-flex align-items-center">
                            <p>The full scope of the prototype consists of three navigable "routes" that encompass the experience of signing a document, preparing and signing a document and only preparing a document for third-party signature. The interactive prototype served not only as a deliverable for the client, but as documentation for their developers, since the product is set to be launched publicly in the next few years.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="px-4 px-sm-0">
                        <iframe
                            title="ADES - Figma project"
                            className="figma-embed rounded-5 shadow-sm w-100"
                            src="https://embed.figma.com/proto/C4GEKRoJcTj55scYMjeSuP/TELAS-MOBILE?node-id=1252-8712&p=f&scaling=scale-down&content-scaling=fixed&page-id=1147%3A19431&starting-point-node-id=1252%3A8712&show-proto-sidebar=0&embed-host=share"
                            allowFullScreen>
                        </iframe>
                    </Col>
                </Row>

                {/* footer */}
                <Row ref={contactRef}>
                    <Footer />
                </Row>
            </Stack>
        </Container>
    );
}