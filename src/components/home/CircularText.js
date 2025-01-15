export default function CircularText() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" className="circular-text">
            <defs>
                <path id="textcircle" d="M150,335a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
            </defs>
            
            <g className="textcircle">
                <text textLength="940">
                    <textPath 
                            href="#textcircle" 
                            aria-label="ENTERPRISE UX DESIGN SYSTEMS DIGITAL ACCESSIBILITY PRODUCT DESIGN" 
                            textLength="908">
                        ENTERPRISE ⠀ UX ⠀ DESIGN SYSTEMS ⠀ DIGITAL ACCESSIBILITY ⠀ PRODUCT DESIGN
                    </textPath>
                </text>
            </g>
        </svg>
    );
}