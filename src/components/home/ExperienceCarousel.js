import Flickity from 'react-flickity-component';
import 'styles/flickity.css';

import norusLogo from 'resources/img/home/norusLogo.svg';
import labsecLogo from 'resources/img/home/labsecLogo.svg';
import sidiLogo from 'resources/img/home/sidiLogo.svg';
import equipeDigitalLogo from 'resources/img/home/equipeDigitalLogo.svg';

import technovationLogo from 'resources/img/home/technovationLogo.svg';
import ufscLogo from 'resources/img/home/ufscLogo.svg';


import ExperienceList from 'components/home/ExperienceList';

const flickityOptions = {
    accessibility: true,
    draggable: true,
    freeScroll: false,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: true,
    pageDots: true,
};

export default function ExperienceCarousel() {
    return (
        <Flickity
            className={'carousel'}
            options={flickityOptions}
            reloadOnUpdate
            static
        >
            <ExperienceList items={[
                {
                    icon: norusLogo,
                    alt: 'Norus icon',
                    description: 'UX/UI Design Analyst @ Norus',
                    period: 'Mar 2024 - Present',
                    url: 'https://www.norus.com.br/'
                },
                {
                    icon: labsecLogo,
                    alt: 'LabSEC icon',
                    description: 'Volunteer Designer @ LabSEC',
                    period: 'Apr 2023 - Dec 2023',
                    url: 'https://labsec.ufsc.br/'
                },
                {
                    icon: sidiLogo,
                    alt: 'SiDi icon',
                    description: 'UX/UI Intern @ SiDi/Samsung',
                    period: 'Aug 2022 - Dec 2023',
                    url: 'https://www.sidi.org.br/en/'
                },
                {
                    icon: equipeDigitalLogo,
                    alt: 'EquipeDigital.com icon',
                    description: 'Social Media & Web Designer @ EquipeDigital.com',
                    period: 'May 2021 - Mar 2022',
                    url: 'https://equipedigital.com/'
                }
            ]} />

            <ExperienceList items={[
                {
                    icon: technovationLogo,
                    alt: 'Norus icon',
                    description: 'Mentor @ Technovation Girls Florianópolis',
                    period: 'Feb 2024 - May 2024',
                    url: 'https://www.technovationbrasil.org/'
                },
                {
                    icon: ufscLogo,
                    alt: 'LabSEC icon',
                    description: 'PIBIC Scholarship Researcher @ UFSC',
                    period: 'Sep 2021 - Sep 2022',
                    url: 'https://www.ufsc.br/'
                },
                {
                    icon: ufscLogo,
                    alt: 'SiDi icon',
                    description: 'Teaching Assistant @ UFSC',
                    period: 'Sep 2020 - May 2021',
                    url: 'https://www.ufsc.br/'
                },
                {
                    icon: null,
                    alt: '',
                    description: '',
                    period: '',
                    url: ''
                }
            ]} />
        </Flickity>
    );
}