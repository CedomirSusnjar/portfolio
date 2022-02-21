import ContactForm from "./contactForm/ContactForm";
import ContactInfo from "./contactInfo/ContactInfo";
import { Container } from "./Style";

const Contact = () => {
    return (
        <Container>
            <ContactInfo />
            <ContactForm />
        </Container>
    );
};

export default Contact;