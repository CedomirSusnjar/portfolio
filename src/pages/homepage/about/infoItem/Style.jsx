import styled from "styled-components";
import theme from "../../../../style/theme";

const { colors } = theme;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

export const Title = styled.div`
    color: ${colors.green};
    font-weight: bold;
`;

export const Value = styled.div`
    color: ${colors.black};
`;