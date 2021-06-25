import { useFormik } from "formik";
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
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form className={`${styles.form}`} onSubmit={formik.handleSubmit}>
            <label htmlFor="name"></label>
            <TextField
                label="Name"
                defaultValue="admin"
                variant="outlined"
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <br />
            <br />

            <label htmlFor="email"></label>
            <TextField
                label="Email"
                defaultValue="admin@gmail.com"
                variant="outlined"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={formik.errors.email ? `${styles.errorsInput}` : ""}
                error={formik.errors.email ? true : ""}
            />

            {formik.errors.email ? (
                <Fade bottom collapse duration={800}>
                    <div className={styles.errors}>{formik.errors.email}</div>
                </Fade>
            ) : null}
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
