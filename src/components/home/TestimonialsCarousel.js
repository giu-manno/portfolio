import { useContext } from 'react';
import Flickity from 'react-flickity-component';
import 'styles/flickity.css';

import Testimonial from 'components/home/Testimonial';

import { WindowSizeContext } from 'App';

export default function TestimonialsCarousel() {
    const windowBreakpoint = useContext(WindowSizeContext);

    const flickityOptions = {
        initialIndex: 2,
        accessibility: true,
        draggable: true,
        freeScroll: true,
        wrapAround: true,
        autoPlay: false,
        prevNextButtons: true,
        pageDots: true,
        resize: true,
        adaptiveHeight: false,
        cellAlign: windowBreakpoint === 'xs' ? 'left' : 'center',
    };

    return (
        <Flickity
            className={'fade-borders testimonials-carousel'}
            options={flickityOptions}
            reloadOnUpdate
            static
        >
            <Testimonial
                name={"Caio Provasi"}
                position={"Mid-level Designer at SiDi"}
                testimonial={
                    <>
                        <p>"I worked with Giulia on the same project, and I can say she's an excellent person and designer!</p>
                        <p>She has outstanding skills for discovery activities and ux writing, as well as great communication and collaborative work... also proactive with critical thinking to understand problems and propose valuable solutions!"</p>
                    </>
                } />
            
            <Testimonial
                name={"Leandro Goulart"}
                position={"Tech Lead at Norus"}
                testimonial={
                    <>
                        <p>"(…) She is a very assertive person with easy communication.</p>
                        <p>Most importantly, this flexibility does not come from being receptive to anything without criteria, but rather from understanding the points raised, reflecting on them, and identifying where and how to make some concessions. In conclusion, she is proving to be an excellent professional who has quickly become an important part of the entire process."</p>
                    </>
                } />

            <Testimonial
                name={"Bruna Peixoto"}
                position={"Product Manager at Norus"}
                testimonial={
                    <>
                        <p>"Your deliveries are consistent, fast (sometimes at lightning speed!), and with an excellence that is hard to find.</p>
                        <p>Your overall perception is something that really stands out to me, and I believe it is one of your greatest strengths. You navigate through all areas to try to understand whether your thoughts on design align with what is expected by the business and what is feasible to develop. This really sets you apart, and I wanted to highlight that and say: keep it up!"</p>
                    </>
                } />

            <Testimonial
                name={"Raphael Silva Moreira"}
                position={"Tech Lead at Norus"}
                testimonial={
                    <>
                        <p>"First of all, I would like to write about your communication and empathy, which, since the interview as a candidate, have already shown to be excellent.</p>
                        <p>You know how to present your ideas, proposals, and opinions clearly and appropriately, at a pace and with attention to language that allows everyone to understand, from those who know nothing to those who dominate the field."</p>
                    </>
                } />

            <Testimonial
                name={"Cristina Colombo Nunes"}
                position={"PhD. Professor at UFSC"}
                testimonial={
                    <>
                        <p>"Giulia was my teaching assistant in 2020. It was a challenging period, due to the COVID-19 pandemic, when UFSC adopted remoted classes.</p>
                        <p>Giulia showed great leadership skills, helping the students in several ways, such as: deal with the content of the course, with the technology that supported the classes and even motivating them in such hard times. She is outgoing, insightful, sensitive, and a deeply self-aware individual driven to use Design to understand the human condition"</p>
                    </>
                } />
        </Flickity>
    );
}