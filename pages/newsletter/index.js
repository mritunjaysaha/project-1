import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { MUIButton } from "../../src/atoms/button";
import Fade from "react-reveal/Fade";

import styles from "../../styles/newsletter.module.scss";

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }

    return errors;
};

const SignupForm = () => {
    const [values, setValues] = useState({ name: "", email: "" });

    function handleChange(e) {
        e.persist();
        setValues((values) => ({ ...values, [e.target.id]: e.target.value }));
    }

    return (
        <form
            action="https://gmail.us6.list-manage.com/subscribe/post"
            method="POST"
            className={`${styles.form}`}
        >
            <input type="hidden" name="u" value="e654510bb63cf53256868ec7e" />
            <input type="hidden" name="id" value="096b104afc" />

            <label htmlFor="name"></label>
            <TextField
                label="Name"
                defaultValue="admin"
                variant="outlined"
                id="name"
                name="NAME"
                type="name"
                onChange={handleChange}
                value={values.name}
            />
            <br />
            <br />

            <label htmlFor="email"></label>
            <TextField
                label="Email"
                defaultValue="admin@gmail.com"
                variant="outlined"
                id="email"
                name="EMAIL"
                type="email"
                onChange={handleChange}
                value={values.email}
                // className={errors.email ? `${styles.errorsInput}` : ""}
                // error={errors.email ? true : ""}
            />

            <br />
            <br />

            <MUIButton type="submit" name="submit" />
        </form>
    );
};

export default function NewsLetterPage() {
    return (
        <section className={styles.newsletterSection}>
            <header>
                <h1>newsletter</h1>
            </header>
            <div className={styles.formContainer}>
                <SignupForm />
            </div>
            <a rel="noopener" href="https://www.freepik.com/photos/background">
                Background photo created by mrsiraphol - www.freepik.com
            </a>
        </section>
    );
}
