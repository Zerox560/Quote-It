import styled from "styled-components";

export const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 0.75;
    min-width: fit-content;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (max-width: 800px) {
        flex: 1;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const FeedTitle = styled.h1`
    position: sticky;
    top: 0;
    z-index: 1000;
    text-align: center;
    font-size: 30px;
    font-weight: 800;
    border-bottom: solid 2px #000;
    background-color: #ffff;
`;
