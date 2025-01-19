import { useState, useEffect, useRef } from "react";
import { Nav, Navbar, Collapse } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom'

import "../styles/header.scss";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const [backButton, setBackButton] = useState(location.pathname !== '/portfolio' && location.pathname !== '/portfolio/');

    const handleHomeButton = () => {
        if (location.pathname !== '/portfolio' && location.pathname !== '/portfolio/') {
            navigate('/portfolio');
            window.scrollTo(0, 0);
        } 
    }

    const navBarRef = useRef(null);
    const handleScroll = () => {
        const position = window.scrollY;
        navBarRef.current.style.boxShadow = `0 0.125rem 0.25rem rgba(0, 0, 0, ${Math.min(position / 500, 0.075)})`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar sticky="top" className={((location.pathname !== '/portfolio' && location.pathname !== '/portfolio/') && 'back-button') || ''}>
            <Nav ref={navBarRef} className='bg-body'>
                <Nav.Link className="d-flex flex-row" href={((location.pathname === '/portfolio' || location.pathname === '/portfolio/') && '#home') || ''} onClick={handleHomeButton}>
                    <Collapse in={backButton} dimension='width'>
                        <p>&lt; back to&nbsp;</p>
                    </Collapse>
                    <p>home</p>
                </Nav.Link>
                <Collapse timeout={600} in={location.pathname === '/portfolio' || location.pathname === '/portfolio/'} onExited={() => setBackButton(true)} onEnter={() => setBackButton(false)} dimension="width">
                    <div className="nav-collapse">
                        <Navbar.Text className="d-none d-sm-inline-block">•</Navbar.Text>
                        <Nav.Link className="d-none d-sm-inline-block" href="#about">about me</Nav.Link>
                        <Navbar.Text className="d-none d-sm-inline-block">•</Navbar.Text>
                        <Nav.Link href="#work">my work</Nav.Link>
                        <Navbar.Text className="d-none d-sm-inline-block">•</Navbar.Text>
                        <Nav.Link href="#experience">experience</Nav.Link>
                        <Navbar.Text className="d-none d-sm-inline-block">•</Navbar.Text>
                        <Nav.Link href="#contact">contact info</Nav.Link>
                    </div>
                </Collapse>
            </Nav>
        </Navbar>
    );
}
