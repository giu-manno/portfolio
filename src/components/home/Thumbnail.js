import { useState } from 'react';
import { Col, Collapse, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import AppleEmoji from 'components/AppleEmoji';

export default function PortfolioThumbnail({ xs, square, rectangle, rectangleBig, backgroundImage, comingSoon, title, subtitle, year, badges, url }) {
    const [open, setOpen] = useState(false);

    return (
        <Col xs={xs}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className={`bg-secondary rounded-4 portfolio-thumbnail ${(square && 'square') || ''} ${(rectangle && 'horizontal-rectangle') || ''} ${(rectangleBig && 'horizontal-rectangle-big') || ''}`}
            onMouseEnter={() => { setOpen(true); }}
            onMouseLeave={() => { setOpen(false); }}>
            <Link to={url} className="w-100 h-100 d-flex flex-column px-2 py-3 justify-content-end z-1 position-relative text-white text-decoration-none">
                <div className="w-100 d-flex flex-row justify-content-between align-items-end">
                    <span>
                        <b>{title}</b>
                        <Collapse in={open && !comingSoon}>
                            <div>
                                <p className={(subtitle && 'pt-1') || ''}>{subtitle}</p>
                                <div className={`d-flex flex-row flex-wrap gap-2 w-75 ${(badges && 'pt-1') || ''}`}>
                                    {badges.map(badge => <Badge key={badge} pill bg='secondary'>{badge}</Badge>)}
                                </div>
                            </div>
                        </Collapse>
                    </span>

                    <p>{year}</p>                    
                </div>
            </Link>

            {comingSoon &&
                <div className='nda-locked'>
                    <h3 className='display-font'>coming soon!</h3>
                    <div className='d-flex flex-row align-items-center subtitle mt-4'>
                        <AppleEmoji className="me-4" name="locked" />
                        <div>
                            <p>This project was developed under an NDA.</p>
                            <p><a href='#contact'>Contact me</a> if you want to know more about it!</p>
                        </div>
                    </div>
                </div>
            }
    </Col>
    );
}