import styled from "styled-components";

export const QuoteContainer = styled.article`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    border: solid 4px #ef476f;
    padding: 1.5rem;
    border-radius: 20px;
    box-shadow: -4px 3px 4px rgba(0, 0, 0, .5);

    @media (max-width: 510px) {
        padding: 1rem;
    }

    @media (max-width: 400px) {
        width: 90vw;
    }
`;

export const QuoteText = styled.h2`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 510px) {
        font-size: 13px;
    }

    @media (max-width: 300px) {
        font-size: 11px;
    }
`;

export const QuoteAuthor = styled.span`
    
`;
