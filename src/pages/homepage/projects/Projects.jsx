import Card from "../../../components/card/Card";
import { Container } from "./Style";

import { useApplicationStateValue } from "../../../context/ApplicationContext";

const Projects = () => {

    const { services } = useApplicationStateValue();

    return (
        <Container>
            {services.map(project => {
                return (
                    <Card {...project}/>
                );
            })}
        </Container>
    );
};

export default Projects;