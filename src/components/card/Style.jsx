import styled from "styled-components";
import theme from "../../style/theme";

const { colors } = theme;

export const Container = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 8px;
    border: 2px solid ${colors.green};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;
`;

export const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    gap: 16px;
    height: 80%;
    width: 100%;
    box-sizing: border-box;
`;

export const ProjectImage = styled.div`
    display: flex;
    width: 30%;
    height: 64px;
    background: url(${props => props.image});
`;

export const ProjectAbout = styled.div`
    width: 70%;
`;