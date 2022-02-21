import { SocialIcon } from "react-social-icons";
import { Container, iconStyle } from "./Style";
import { socialMediaLinks } from "../../../context/data";

const Footer = () => {

    return (
        <Container>
            {Object.values(socialMediaLinks).map(value => {
                return (
                    <SocialIcon style={iconStyle} url={value} />
                );
            })}
        </Container>
    );
};

export default Footer;