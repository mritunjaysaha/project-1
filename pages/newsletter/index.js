import { useFormik } from "formik";

import styles from "../../styles/newsletter.module.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { MUIButton } from "../../src/atoms/button";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(0),
            width: "40rem",
        },
    },
}));

const validate = (values) => {
    const errors = {};
    // if (!values.firstName) {
    //     errors.firstName = "Required";
    // } else if (values.firstName.length > 15) {
    //     errors.firstName = "Must be 15 characters or less";
    // }

    // if (!values.lastName) {
    //     errors.lastName = "Required";
    // } else if (values.lastName.length > 20) {
    //     errors.lastName = "Must be 20 characters or less";
    // }

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
    const classes = useStyles();
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: "admin@test.com",
            name: "admin",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form
            className={`${classes.root} ${styles.form}`}
            onSubmit={formik.handleSubmit}
        >
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
            />
            {formik.errors.email ? (
                <div className={styles.errors}>{formik.errors.email}</div>
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
            <a href="https://www.freepik.com/photos/background">
                Background photo created by mrsiraphol - www.freepik.com
            </a>
        </section>
    );
}
