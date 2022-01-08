import styled from "styled-components";

export const FormContainer = styled.form`
    border: solid 4px #ef476f;
    box-shadow: -4px 3px 4px rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 30vw;
    height: fit-content;
    padding: 1.5rem;
    background-color: #ffff;
    border-radius: 10px;

    @media (max-width: 900px) {
        width: 70vw;
    }

    @media (max-width: 500px) {
        width: 95vw;
    }
`;

export const Input = styled.input`
    border: solid 2px #000;
    outline: none;
    border-radius: 10px;
    padding: 7px;
    font-weight: 800;
`;

export const SubmitBtn = styled.button`
    border: solid 2px #000;
    cursor: pointer;
    width: 5rem;
    margin: 0 auto;
    border-radius: 20px;
    padding: 10px;
    transition: all .1s ease;

    &:hover {
        background-color: #ef476f;
        color: #fff;
    }
`;
