import { Biography, Container, DataBox, ImageBox, InfoBox } from "./Style";
import profileImage from '../../../assets/profile.png';
import InfoItem from "./infoItem/InfoItem";
import { useApplicationStateValue } from "../../../context/ApplicationContext";
import { useTranslation } from "react-i18next";

const About = () => {

    const { personAbout } = useApplicationStateValue();
    const { t } = useTranslation();
    
    const nameTitle = t('about.name');
    const bornTitle = t('about.born');
    const educationTitle = t('about.education');
    const positionTitle = t('about.position');

    return (
        <Container>
            <InfoBox>
                <ImageBox image={profileImage} />
                <DataBox>
                    <InfoItem title={nameTitle} value={personAbout.name} />
                    <InfoItem title={bornTitle} value={personAbout.born} />
                    <InfoItem title={educationTitle} value={personAbout.education} />
                    <InfoItem title={positionTitle} value={personAbout.position} />
                </DataBox>
            </InfoBox>
            <Biography>
                {personAbout.about}
            </Biography>
        </Container>
    );
};

export default About;