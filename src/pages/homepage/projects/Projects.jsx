import Card from "../../../components/card/Card";
import { Container } from "./Style";

import { useApplicationStateValue } from "../../../context/ApplicationContext";

const Projects = () => {

    const { services } = useApplicationStateValue();

    return (
        <Container>
            {services.map((project, index) => {
                return (
                    <Card key={index} {...project}/>
                );
            })}
        </Container>
    );
};

export default Projects;