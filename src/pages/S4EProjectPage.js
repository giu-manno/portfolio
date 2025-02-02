import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Video from "yet-another-react-lightbox/plugins/video";

import "styles/project/project.scss";

import IndexNavBar from "components/project/IndexNav";
import S4EPage from "pages/S4EPage";
import { imageList } from "components/project/s4e/ImageList";

export default function ProjectPage() {
    const [activeSection, setActiveSection] = useState();
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* lightbox */}
            <Lightbox
                plugins={[ Zoom, Captions, Video ]}
                index={index}
                slides={imageList}
                open={index >= 0}
                animation={{
                    fade: 200,
                    swipe: 200,
                    zoom: 0
                }}
                carousel={{
                    padding: '5%'
                }}
                close={() => setIndex(-1)}
                zoom={{
                    scrollToZoom: true
                }}
                controller={{ closeOnBackdropClick: true }}
            />

            {/* right-aligned navbar */}
            <IndexNavBar
                sectionList={[
                    { title: 'overview', href: '#overview' },
                    { title: 'challenges', href: '#challenges' },
                    { title: 'wireframes', href: '#wireframes' },
                    { title: 'mid-fidelity screens', href: '#midFidelity' },
                    { title: 'results', href: '#results' },
                    { title: 'contact', href: '#contact' },
                ]}
                activeSection={activeSection} />

            {/* page content */}
            <S4EPage 
                setActiveSection={setActiveSection} 
                setImageIndex={setIndex} />
        </>
    );
}