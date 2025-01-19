import { Col } from "react-bootstrap";

export default function Testimonial({ name, position, testimonial, className }) {
    return (
        <Col xxl={4} lg={5} md={7} sm={9} xs={10} className={`testimonial bg-secondary rounded-5 p-4 overflow-auto ${className}`}>
            <div className="d-flex flex-column gap-md-4 gap-3">
                <span>
                    <p className="subtitle display-font">{name}</p>
                    <b>{position}</b>
                </span>

                <span>{testimonial}</span>
            </div>
        </Col>
    );
}