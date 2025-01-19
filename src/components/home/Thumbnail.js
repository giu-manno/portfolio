import { useState, useContext } from 'react';
import { Col, Collapse, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import useOnclickOutside from 'react-cool-onclickoutside';

import AppleEmoji from 'components/AppleEmoji';

import { WindowSizeContext } from 'App';

export default function PortfolioThumbnail({ xs, sm, md, lg, xl, xxl, square, rectangle, rectangleBig, backgroundImage, comingSoon, title, subtitle, year, badges, url }) {
    const windowBreakpoint = useContext(WindowSizeContext);
    const thumbnailRef = useOnclickOutside(() => { setOpen(false); });
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        if (!open && ['xs', 'sm', 'md'].includes(windowBreakpoint))
            e.preventDefault();
    }

    return (
        <Col
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            xxl={xxl}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className={`bg-secondary rounded-4 portfolio-thumbnail ${(square && 'square') || ''} ${(rectangle && 'horizontal-rectangle') || ''} ${(rectangleBig && 'horizontal-rectangle-big') || ''} ${(open && 'active') || ''}`}
            ref={thumbnailRef}
            onMouseEnter={() => { setOpen(true); }}
            onMouseLeave={() => { setOpen(false); }}
            onClick={() => { setOpen(true); }}>
            <Link to={url} onClick={(e) => { handleClick(e); }} className="w-100 h-100 d-flex flex-column px-sm-2 py-sm-3 px-1 py-2 justify-content-end z-1 position-relative text-white text-decoration-none">
                <div className="w-100 d-flex flex-row justify-content-between align-items-end">
                    <span>
                        <b>{title}</b>
                        <Collapse in={open && !comingSoon}>
                            <div>
                                <p className={(subtitle && 'pt-1') || ''}>{subtitle}</p>
                                <div className={`d-sm-flex d-none flex-row flex-wrap gap-2 w-75 ${(badges && 'pt-1') || ''}`}>
                                    {badges.map(badge => <Badge key={badge} pill bg='secondary'>{badge}</Badge>)}
                                </div>
                            </div>
                        </Collapse>
                    </span>

                    <p>{year}</p>                    
                </div>
            </Link>

            {comingSoon &&
                <div className={'nda-locked ' + (open ? 'active' : '')}>
                    <h3 className='display-font'>coming soon!</h3>
                    <div className='d-flex flex-row align-items-center subtitle mt-4'>
                        <AppleEmoji className="d-md-block d-none me-4" name="locked" />
                        <div>
                            <p className='subtitle text-md-start text-center'>This project was developed under an NDA.</p>
                            <p className='subtitle text-md-start text-center'><a href='#contact'>Contact me</a> if you want to know more about it!</p>
                        </div>
                    </div>
                </div>
            }
    </Col>
    );
}