import styled from "styled-components";

export const Wrapper = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 30px;
    color: ${({ active }) => active ? "#ef476f;" : "#000;"}
    width: fit-content;
    margin-left: 15px;
    transition: color .1s ease;

    &:hover {
        color: #ef476f;
    }

    @media (max-width: 768px) {
        margin-left: 5px;
        gap: 5px;
    };

    h2 {
        font-weight: 800;
        font-size: 20px;
        text-shadow: -3px 2px 4px rgba(0, 0, 0, .5);
    };
`;
