import { Container, Content, ProjectAbout, ProjectImage, Title } from "./Style";

const Card = ({name, about, image}) => {
    return (
        <Container>
            <Title>{name}</Title>
            <Content>
                <ProjectImage image={image}/>
                <ProjectAbout>{about}</ProjectAbout>
            </Content>
        </Container>
    );
};

export default Card;