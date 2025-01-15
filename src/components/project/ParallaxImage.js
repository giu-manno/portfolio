import { Col } from "react-bootstrap";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function ParallaxImage({ className, src, onClick, children, parallaxSpeed = -10, xs }) {
    return (
        <Col xs={xs} className={`p-0 position-relative rounded-5 shadow-sm parallax ${className}`} onClick={onClick}>
            <ParallaxBanner className="h-100">
                <ParallaxBannerLayer speed={parallaxSpeed}>
                    <img src={src} alt="ADES - Advanced Digital Signature Platform" />
                </ParallaxBannerLayer>
            </ParallaxBanner>

            { children }
        </Col>
    );
}