import { Container, SectionTitle } from "./Style";

const Section = ({ title, sectionContent, sectionId, color }) => {
    return (
        <Container id={`${sectionId}`} backgroundColor={color}>
            <SectionTitle>{title}</SectionTitle>
            {sectionContent}
        </Container>
    );
};

export default Section;