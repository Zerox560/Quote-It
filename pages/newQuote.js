import { Form } from "../components";

import styles from "../styles/newQuote.module.css";

function newQuote() {
    return (
        <div className={styles.container}>
            <h1 className={styles.newQuote__title} >Vamos a subir una nueva frase!</h1>
            <Form />
        </div>
    )
}

export default newQuote;
