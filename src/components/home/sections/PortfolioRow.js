import { Row, Col } from "react-bootstrap";

import adesThumbnail from "resources/img/home/adesThumbnail.webp";
import s4eThumbnail from "resources/img/home/s4eThumbnail.webp";
// import findiThumbnail from "resources/img/home/findiThumbnail.jpg";
// import sidiThumbnail from "resources/img/home/sidiThumbnail.jpg";

import PortfolioThumbnail from "components/home/Thumbnail";

export default function PortfolioRow() {
    return (
        <div className="px-sm-0 px-4">
            {/* section title */}
            <Row>
                <h3 className="p-0 display-font mb-lg-4 mb-sm-3 mb-2">selected work</h3>
            </Row>

            {/* section content */}
            <Row id="work" className="gap-lg-4 gap-sm-3 gap-2">
                <PortfolioThumbnail
                    lg={4} 
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
        </div>
    );
}