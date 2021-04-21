import styled from 'styled-components';

export const Container = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        height: 30rem;
    }

    @media(max-width: 768px) {
        width: 100%;

        > img {
            height: 20rem;
        }
    }

    @media(max-width: 540px) {
        
        > img {
            height: 15rem;
        }
    }
`;
