import { Container, Content, ProjectAbout, ProjectImage, Title } from "./Style";

const Card = ({title, about, image}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Content>
                <ProjectImage image={image}/>
                <ProjectAbout>{about}</ProjectAbout>
            </Content>
        </Container>
    );
};

export default Card;