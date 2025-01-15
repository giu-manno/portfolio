import { Row, Col } from "react-bootstrap";

import adesThumbnail from "resources/img/home/adesThumbnail.jpg";
import s4eThumbnail from "resources/img/home/s4eThumbnail.jpg";
// import findiThumbnail from "resources/img/home/findiThumbnail.jpg";
// import sidiThumbnail from "resources/img/home/sidiThumbnail.jpg";

import PortfolioThumbnail from "components/home/Thumbnail";

export default function PortfolioRow() {
    return (
        <Col>
            {/* section title */}
            <Row>
                <h3 className="p-0 display-font mb-4">selected work</h3>
            </Row>

            {/* section content */}
            <Row id="work" className="gap-4">
                <PortfolioThumbnail
                    xs={4} 
                    backgroundImage={adesThumbnail}
                    title="Ades - Digital Signature Platform"
                    subtitle="LabSEC"
                    year="2023"
                    badges={["Design System", "Wireframes", "Prototypes", "Benchmarking", "Usability Tests"]}
                    url={'/portfolio/labsec'} />

                <Col>
                    {/* <Row className="gap-4 mb-4">
                        <PortfolioThumbnail 
                            square
                            backgroundImage={sidiThumbnail}
                            title="Information Architecture"
                            subtitle="Samsung"
                            year="2023"
                            badges={["Prototyping", "UX Research", "Information Architecture", "Design QA"]}
                            url={'/samsung'} />

                        <PortfolioThumbnail 
                            square
                            backgroundImage={findiThumbnail}
                            title="FINDI - Digital Entertainment App"
                            subtitle="Ambev"
                            year="2022"
                            badges={["Personas", "User Journey", "Prototypes", "Benchmarking"]}
                            url={'/ambev'} />
                    </Row> */}

                    <Row>
                        <PortfolioThumbnail 
                            comingSoon
                            rectangleBig
                            backgroundImage={s4eThumbnail}
                            title="Suite 4 Energy"
                            subtitle="Norus"
                            year="2024"
                            badges={["Design System", "Enterprise UX", "B2B", "Prototypes", "Product Design"]}
                            url={'/portfolio/norus'} />
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}