import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 48px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const Biography = styled.div`
    padding: 0px 20px 0px 20px;
`;

export const ImageBox = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 16px;
    background: url(${props => props.image});
    background-size: 100% 100%;
`;

export const DataBox = styled.div`
    display: flex;
    flex-direction: column;
`;