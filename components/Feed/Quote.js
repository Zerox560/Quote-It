import { QuoteContainer, QuoteText, QuoteAuthor } from "./QuoteStyles";

function Quote({ text, author }) {
    return (
        <QuoteContainer>
            <QuoteText>
                {text}
                <QuoteAuthor>- {author}</QuoteAuthor>
            </QuoteText>
        </QuoteContainer>
    )
}

export default Quote;
