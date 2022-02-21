import { Container, Title, Value } from "./Style";

const InfoItem = ({title, value}) => {
    return (
        <Container>
            <div><Title>{title}: </Title><Value>{value}</Value></div>
        </Container>
    );
};

export default InfoItem;