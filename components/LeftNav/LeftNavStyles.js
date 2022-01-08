import styled from "styled-components";

export const NavContainer = styled.header`
    display: flex;
    flex-direction: column;
    flex: 0.25;
    gap: 2.5rem;
    height: 100vh;
    border-right: solid 2px #000;
    box-shadow: 4px 1px 4px rgba(0, 0, 0, .5);

    @media (max-width: 800px) {
        display: none;
    }
`;

export const Brand = styled.h1`
    text-align: center;
`;