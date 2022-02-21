import styled from "styled-components";
import theme from "../../../style/theme";

const { colors } = theme;

export const Container = styled.div`
    position: fixed;
    height: 80px;
    width: 100%;
    gap: 8px;
    display: flex;
    z-index: 100;
    justify-content: space-between;
    align-items: center;
    padding-right: 48px;
    background-color: ${colors.white};
    box-sizing: border-box;
    box-shadow: 1px 2px 3px rgba(0,0,0,.2);
    padding-left: 38px;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const SectionLink = styled.a`
    text-decoration: none;
    color: ${colors.black};
    &: hover {
        color: ${colors.green};
        pointer: cursor;
    }
`;

export const LinkBox = styled.div`
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
        color: ${colors.green};
    }
`;

export const Logo = styled.div`
    background-color: ${colors.white};
    width: 193px;
    height: 53px;
    background: url(${props => props.image});
`;

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`;