import { useEffect } from "react";
import { Row, Col, Container, Stack, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import useDetectScroll from '@smakss/react-scroll-direction';

import AppleEmoji from "components/AppleEmoji";
import ParallaxImage from "components/project/ParallaxImage";
import { imageList } from "components/project/s4e/ImageList";
import Footer from "components/Footer";

export default function AdesPage({ setActiveSection, setImageIndex }) {
    const { ref: overviewRef, inView: overviewInView } = useInView({ rootMargin: "-20% 0px -30% 0px" });
    const { ref: challengesRef, inView: challengesInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: wireframesRef, inView: wireframesInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: midFidelityRef, inView: midFidelityInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: resultsRef, inView: resultsInView } = useInView({ rootMargin: "10% 0px -30% 0px" });
    const { ref: contactRef, inView: contactInView } = useInView({ rootMargin: "10% 0px -10% 0px" });

    const { scrollDir } = useDetectScroll();

    useEffect(() => {
        if (scrollDir === "down") {
            if (contactInView) setActiveSection(5);
            else if (resultsInView) setActiveSection(4);
            else if (midFidelityInView) setActiveSection(3);
            else if (wireframesInView) setActiveSection(2);
            else if (challengesInView) setActiveSection(1);
            else if (overviewInView) setActiveSection(0);
        } else {
            if (overviewInView) setActiveSection(0);
            else if (challengesInView) setActiveSection(1);
            else if (wireframesInView) setActiveSection(2);
            else if (midFidelityInView) setActiveSection(3);
            else if (resultsInView) setActiveSection(4);
            else if (contactInView) setActiveSection(5);
        }
    }, [contactInView, resultsInView, midFidelityInView, wireframesInView, challengesInView, overviewInView, scrollDir, setActiveSection]);

    return (
        <Container>
            <Stack className="gap-4 gap-xl-5">
                <div ref={overviewRef} className="d-flex flex-column gap-4 gap-xl-5 px-4 px-sm-0">
                    {/* title */}
                    <Row id="overview">
                        <h1 className="p-0">Suite 4 Energy - Everything you need for the free energy market.</h1>
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
                                        <p className="details">Norus</p>
                                    </span>

                                    <span className="flex-fill flex-basis-0">
                                        <p className="annotations">Timeline</p>
                                        <p className="details">March - February 2025</p>
                                    </span>
                                </div>

                                <span>
                                    <p className="annotations">Role and Activities</p>
                                    <p className="details d-block d-md-none">Ideation - Prototyping - Product Design</p>
                                    <p className="details d-none d-md-block">In this project, I worked alongside another Designer, Front-end and Back-end developers, Project Managers, and corporate leaders. I was responsible for structuring the UI for a new B2B SaaS product and prototyping new features based on project requirements.</p>
                                </span>
                            </div>
                        </Col>
                    </Row>

                    {/* disclaimer alert */}
                    <Row className="d-none d-md-block">
                        <Col className="p-0">
                            <div className="disclaimer-alert">
                                <div>
                                    <AppleEmoji className="me-4" name="warning" width="1.75rem" />
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="display-text annotations">disclaimer:</p>
                                    <p>some of the contents of this work have been adapted to comply with NDA restrictions.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* introduction and overview */}
                    <Row className="gap-4 pt-3">
                        <Col lg={{order: 1}} className="bg-secondary rounded-5 introduction-panel">
                            <h3 className="display-font introduction-header">overview</h3>

                            <div className="d-flex flex-column gap-4 text-md-start text-center">
                                <p className="subtitle lh-1">
                                    The free energy market is based on consumers being able to <b>choose from where they buy electricity</b>.
                                </p>
                                <p className="d-none d-md-block">
                                    My client provides products that range from <b>Front, Back and Middle-office,</b> contemplating most of the usual flows in the process of buying and selling energy. Since these products were launched at different timelines, they have an inconsistent visual presentation, and many were <b>outdated and hard to use</b>.
                                </p>
                            </div>
                        </Col>

                        <Col lg={{span: 6, order: 0}}>
                            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                <h2 className="text-center">“We wish to develop a suite that unifies all of our products, with a consistent visual identity and ease-of-use even with complex functionalities.”</h2>
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
                            <h3 className="display-font">the challenges</h3>
                        </div>
                    </Col>

                    <Col>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <div className="d-flex flex-column gap-4 gap-md-3">
                                <p>The company already had established products on the market, but alongside the idea for a new one, came the question:<br /><b>what if we establish a membership-based suite, with access to all of our products at once?</b></p>
                                <p>This came with many benefits, such as a <b>unified login system, and a shared database between products (or “apps”)</b>, with the possibility of correlating this data amongst different apps, as well as <b>more customization and a sense of ownership for the client</b>. But there were also many challenges - the existing products were launched within 5 years of each other and had very distinct appearances and functions. They also had to be accessed from the same place, with structured navigability, without losing their core functions and individuality.</p>
                            </div>
                        </div>
                    </Col>
                    </div>
                </Row>

                <Row className="gap-3 gap-lg-4 px-4 px-sm-0">
                    <Col xs={12} className="bg-secondary rounded-5 p-3 p-sm-4 text-center">
                        <h2 className="my-2"><b>How might we</b> connect many different products in one singular interface?</h2>
                    </Col>
                </Row>

                <Row className="gap-4 gap-lg-5">
                    <Col className="px-4 px-sm-0">
                        <div className="d-flex flex-column h-100 justify-content-center gap-3">
                            <p>This case will cover, mainly, my efforts in designing the “shell” of this suite, which consists of <b>visual identity, information architecture and navigation interface</b>.</p>
                            <p className="d-none d-lg-block">Our first step consisted of analyzing the information structure in each web app. This was done by exploring navigation levels and discerning core functions and was subsequently materialized through sitemaps and user flows.</p>
                            <p className="d-none d-lg-block">After gathering what we had, we also designed the new flows for the suite, such as <b>login and authentication, admin routes,</b> and everything that was pertaining to the “outer” layer of the system.</p>
                        </div>
                    </Col>

                    <Col className="px-4 px-sm-0" lg>
                        <ParallaxImage parallaxSpeed={0} src={imageList[2].src} onClick={() => setImageIndex(2)} className="challenges-image shadow-none" />
                    </Col>

                    <Col className="px-4 px-sm-0 d-block d-lg-none">
                        <div className="d-flex flex-column h-100 justify-content-center gap-3">
                            <p>Our first step consisted of analyzing the information structure in each web app. This was done by exploring navigation levels and discerning core functions and was subsequently materialized through sitemaps and user flows.</p>
                            <p>After gathering what we had, we also designed the new flows for the suite, such as <b>login and authentication, admin routes,</b> and everything that was pertaining to the “outer” layer of the system.</p>
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
                            <p>What we came up with was that each app needed a set of “main” layouts, that would be reutilized according to the specific necessities. Since this is an enterprise product, most of this consisted of data tables, dashboards and lists. Besides that, we also needed some screens for managerial and general functions that were above the apps, such as a home screen, a settings screen and an app list screen.</p>
                        </div>
                    </Col>
                </Row>

                <Row className="px-4 px-sm-0">
                    <ParallaxImage parallaxSpeed={0} src={imageList[3].src} onClick={() => setImageIndex(3)} className="horizontal-rectangle" />
                </Row>

                <Row className="gap-4">
                    <Col lg={3} className="px-4 px-sm-0">
                        <div className="w-100 h-100 d-flex flex-column gap-3 justify-content-center">
                            <p>In this stage, we established some ground concepts. The interface navigation would be through a <b>sidebar</b>, with varying content in the middle section of the screen, according to which app was being accessed.</p>
                            <p>As we gathered from the initial explorations, besides the Suite navigation, each app had its own complex and intricate tree of navigation, which required some creative experimentation to show everything together concisely and clearly.</p>
                        </div>
                    </Col>

                    <Col className="px-4 px-sm-0">
                        <ParallaxImage parallaxSpeed={0} src={imageList[4].src} onClick={() => setImageIndex(4)} className="horizontal-rectangle-thin" />
                    </Col>
                </Row>

                {/* medium-fidelity screens */}
                <Row ref={midFidelityRef} id="midFidelity" className="py-0 py-lg-4 gap-4">
                    <Col className="px-4 px-sm-0" lg={3}>
                        <div className="w-100 h-100 d-flex align-items-center">
                            <h3 className="display-font">medium-fidelity screens</h3>
                        </div>
                    </Col>

                    <Col className="px-4 px-sm-0">
                        <div className="w-100 h-100 d-flex align-items-center">
                            <p>The adopted strategy was to work with a set of <b>one secondary sidebar nested inside the primary sidebar</b>. It sounds overly complex, but what it translated to was assigning one color scheme for each app and one for the general suite. The secondary sidebar appeared in the moment one app was accessed, overlaying the suite sidebar, and preserving access to both app and suite functionalities. We also designed some other screens to further test out this idea, as a sort of proof-of-concept.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="px-4 px-sm-0">
                        <ParallaxImage parallaxSpeed={0} src={imageList[5].src} onClick={() => setImageIndex(5)} className="horizontal-rectangle" />
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
                            <p>The data from the discovery stage was essential for establishing the first iteration of prototypes and user flows, in a low-fidelity manner.  These wireframes described the flows for signing a document digitally, and were tested for possible usability issues, and to validate the suppositions that were made so far.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="px-4 px-sm-0">
                        <video onClick={() => setImageIndex(6)} className="w-100 shadow-sm cursor-pointer rounded-5" autoPlay={true} loop muted>
                            <source src={imageList[6].src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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