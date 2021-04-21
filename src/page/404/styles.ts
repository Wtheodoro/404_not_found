import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    height: calc(100% - 130px);
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 768px) {
        height: 100%;
        flex-direction: column;
    }
`;
