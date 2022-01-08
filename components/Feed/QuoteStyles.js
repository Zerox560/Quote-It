import styled from "styled-components";

export const QuoteContainer = styled.article`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: solid 4px #ef476f;
    padding: 1.5rem;
    border-radius: 20px;
    box-shadow: -4px 3px 4px rgba(0, 0, 0, .5);
`;

export const QuoteText = styled.h2`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const QuoteAuthor = styled.span`
    
`;