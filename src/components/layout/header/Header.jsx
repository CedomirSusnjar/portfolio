import { Container, LinkBox, Logo, NavigationContainer, SectionLink } from "./Style";
import logoImage from '../../../assets/logo.PNG';
import { useNavigate } from "react-router-dom";
import routes from "../../../router/routes";
import { useTranslation } from "react-i18next";
import { useApplicationStateValue } from "../../../context/ApplicationContext";

const Header = () => {
    const { t } = useTranslation();
    const { changeLanguage, language } = useApplicationStateValue();
    const navigate = useNavigate();

    const handleContactFormPush = () => {
        navigate(routes.CONTACT);
    };

    const handleLanguageChange = () => {
        changeLanguage();
    };

    const about = t('header.about');
    const services = t('header.services');
    const contact = t('header.contact');

    return (
        <Container>
            <Logo image={logoImage}/>
            <NavigationContainer>
                <LinkBox>
                    <SectionLink href={routes.ABOUT_ME}>{about}</SectionLink>
                </LinkBox>
                <LinkBox>
                    <SectionLink href={routes.SERVICES}>{services}</SectionLink>
                </LinkBox>
                <LinkBox>
                    <SectionLink onClick={handleContactFormPush}>{contact}</SectionLink>
                </LinkBox>
                <LinkBox>
                    <div onClick={handleLanguageChange}>{language}</div>
                </LinkBox>
            </NavigationContainer>
        </Container>
    );
};

export default Header;