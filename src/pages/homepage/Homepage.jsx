import { useTranslation } from "react-i18next";
import Section from "../../components/section/Section";
import About from "./about/About";
import Projects from "./projects/Projects";
import { Container } from "./Style";

const sectionIdList = {
    ABOUT: 'about',
    SERVICES: 'services'
};

const Homepage = () => {

    const { t } = useTranslation();

    const aboutTitle = t('homepage.aboutTitle');
    const servicesTitle = t('homepage.servicesTitle');

    return (
        <Container>
            <Section title={aboutTitle} sectionContent={<About />} sectionId={sectionIdList.ABOUT} />
            <Section title={servicesTitle} sectionContent={<Projects />} sectionId={sectionIdList.SERVICES} />
        </Container>
    );
};

export default Homepage;