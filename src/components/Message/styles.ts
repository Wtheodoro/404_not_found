import styled from 'styled-components';

export const Container = styled.div`
    width: 48%;
    height: 100%;
    padding: 2rem;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > h1 {
        font-size: 4rem;
        font-weight: 700;
        width: 45rem;
        margin-bottom: 3rem;
    }

    > p {
        font-size: 1.5rem;
        font-weight: 400;
        width: 25rem;
        margin-bottom: 3rem;
    }

    @media(max-width: 768px) {
        width: 100%;
        
    }

    @media(max-width: 540px) {
        padding: 1rem;

        > h1 {
            font-size: 3rem;
            width: 23rem;
        }

        > p {
            font-size: 1rem;
            width: 18rem;
        } 
       
    }
`;
