import { Col } from "react-bootstrap";

export default function Testimonial({ name, position, testimonial}) {
    return (
        <Col xs={4} className="testimonial bg-secondary rounded-5 square p-4 overflow-auto">
            <div className="d-flex flex-column gap-4">
                <span>
                    <p className="subtitle display-font">{name}</p>
                    <b>{position}</b>
                </span>

                <span>{testimonial}</span>
            </div>
        </Col>
    );
}