import { useState, useEffect } from "react";
import Quote from "./Quote";

import { FeedContainer, FeedTitle } from "./FeedStyles";

function Feed() {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        async function getQuotes() {
            const response = await fetch("http://localhost:3000/api/v1/quotes");
            const quotes = await response.json();

            setQuotes(quotes.quotes);
        }

        getQuotes();
    }, []);

    return (
        <FeedContainer>
            <FeedTitle>Frases Recientes</FeedTitle>
            {quotes.map(({text, author}) => (
                <Quote text={text} author={author} />
            ))}
        </FeedContainer>
    )
}

export default Feed;
