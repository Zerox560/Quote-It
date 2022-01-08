import { useRef } from "react";

import { FormContainer, Input, SubmitBtn } from "./FormStyles";

function Form() {
    const textRef = useRef();
    const authorRef = useRef();

    async function addQuoteHandler(ev) {
        ev.preventDefault();

        const text = textRef.current.value;
        const author = authorRef.current.value;

        const newQuote = {
            text,
            author
        };

        await fetch("http://localhost:3000/api/v1/quotes/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuote)
        });

        window.location = "/";
    };

    return (
        <FormContainer onSubmit={addQuoteHandler}>
            <Input type="text" placeholder="Frase" ref={textRef} />
            <Input type="text" placeholder="Autor" ref={authorRef} />
            <SubmitBtn type="submit">Enviar</SubmitBtn>
        </FormContainer>
    )
}

export default Form;
