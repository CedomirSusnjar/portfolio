import styled from "styled-components";
import theme from "../../../style/theme";

const { colors } = theme;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
`;

export const FormTitle = styled.div`
    font-size: 32px;
    display: flex;
    justify-content: center;
`;

export const FormLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    display: flex;
    flex-direction: column;
`;

export const FormInput = styled.input`
    height: 24px;
    border-radius: 4px;
    border: 1px solid ${colors.green};
`;

export const Label = styled.div`
    width: 100px;
    color: ${colors.green};
    font-weight: bold;
`;

export const MessageBox = styled.textarea`
    border-radius: 4px;
    border-color: ${colors.green};
`;

export const StyledButton = styled.button`
    background-color: ${colors.green};
    color: ${colors.white};
    border: none;
    width: 140px;
    height: 32px;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
    }
`;