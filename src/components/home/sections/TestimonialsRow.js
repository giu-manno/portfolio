import { Row } from "react-bootstrap";

import AppleEmoji from "components/AppleEmoji";

import TestimonialsCarousel from "components/home/TestimonialsCarousel";

export default function TestimonialsRow() {
    return (
        <div>
            {/* section title */}
            <Row className="px-sm-0 px-4">
                <h3 className="p-0 display-font mb-lg-4 mb-sm-3 mb-2">
                    what other people say
                    <AppleEmoji name="speech-balloon" className="ms-md-4 ms-2" />
                </h3>
            </Row>

            <TestimonialsCarousel />
        </div>
    );
}