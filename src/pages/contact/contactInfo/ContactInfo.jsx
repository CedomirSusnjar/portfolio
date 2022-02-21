import { useTranslation } from "react-i18next";
import { useApplicationStateValue } from "../../../context/ApplicationContext";
import InfoItem from "../../homepage/about/infoItem/InfoItem";
import { Container } from "./Style";

const ContactInfo = () => {

    const { personAbout } = useApplicationStateValue();
    const { t } = useTranslation();

    const phoneNumberLabel = t('contact.phoneNumber');
    const emailLabel = t('contact.email');
    const addressLabel = t('contact.address');

    return (
        <Container>
            <InfoItem title={phoneNumberLabel} value={personAbout.phoneNumber} />
            <InfoItem title={emailLabel} value={personAbout.email} />
            <InfoItem title={addressLabel} value={personAbout.address} />
        </Container>
    );
};

export default ContactInfo;