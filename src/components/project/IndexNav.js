import { Nav, Navbar } from "react-bootstrap";

export default function IndexNavBar({ sectionList, activeSection }) {
    return (
        <Navbar className="navbar-right">
            {sectionList.map((section, index) => 
                <Nav.Link key={section.href} href={section.href} className={activeSection === index ? 'active' : ''}>
                    <div>
                        <p>{section.title}</p>
                        <span className="bullet" />
                    </div>
                </Nav.Link>
            )}
        </Navbar>
    );
}