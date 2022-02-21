import styled from "styled-components";
import theme from "../../../style/theme";

const { colors } = theme;

export const Container = styled.div`
    position: fixed;
    height: 48px;
    width: 100%;
    gap: 8px;
    display: flex;
    flex-direction: columns;
    z-index: 100;
    align-items: center;
    bottom: 0px;
    justify-content: center;
    background-color: ${colors.white};
    box-shadow: 1px -3px 3px rgb(0 0 0 / 20%);
`;

export const iconStyle = {
    width: '24px',
    height: '24px'
};