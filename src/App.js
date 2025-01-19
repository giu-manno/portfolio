import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import { Container } from "react-bootstrap";

import Header from "components/Header";

export const WindowSizeContext = createContext(null);

function App() {
    // Viewport width
    const mqlXS = window.matchMedia('(max-width: 576px)') // Extra small breakpoint
    const mqlSM = window.matchMedia('(min-width: 576px) and (max-width: 767px)') // Small breakpoint
    const mqlMD = window.matchMedia('(min-width: 768px) and (max-width: 992px)') // Medium breakpoint
    const mqlLG = window.matchMedia('(min-width: 992px) and (max-width: 1200px)') // Large breakpoint
    const mqlXL = window.matchMedia('(min-width: 1200px) and (max-width: 1400px)') // Extra large breakpoint
    const mqlXXL = window.matchMedia('(min-width: 1400px)') // Extra extra large breakpoint
    const [windowBreakpoint, setWindowBreakpoint] = useState(
        mqlXS.matches? "xs" :
        mqlSM.matches? "sm" :
        mqlMD.matches? "md" :
        mqlLG.matches? "lg" :
        mqlXL.matches? "xl" :
        mqlXXL.matches? "xxl" :
        "xs" // Default to extra small breakpoint
    );

    mqlXS.addEventListener('change', (e) => { e.matches && setWindowBreakpoint("xs") });
    mqlSM.addEventListener('change', (e) => { e.matches && setWindowBreakpoint("sm") });
    mqlMD.addEventListener('change', (e) => { e.matches && setWindowBreakpoint("md") });
    mqlLG.addEventListener('change', (e) => { e.matches && setWindowBreakpoint("lg") });
    mqlXL.addEventListener('change', (e) => { e.matches && setWindowBreakpoint("xl") });
    mqlXXL.addEventListener('change', (e) => { e.matches && setWindowBreakpoint("xxl") });

    return (
        <ParallaxProvider>
            <WindowSizeContext.Provider value={windowBreakpoint}>
                <Container fluid className='p-0 d-flex flex-column'>
                    <Header />
                    <Outlet />
                </Container>
            </WindowSizeContext.Provider>
        </ParallaxProvider>
    );
}

export default App;
