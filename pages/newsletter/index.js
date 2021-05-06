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

const SignupForm = () => {
    const classes = useStyles();
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
        },
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
            {/* <input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
            /> */}
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
            {/* <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            /> */}
            <TextField
                required
                label="Email"
                defaultValue="admin@gmail.com"
                variant="outlined"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
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
        </section>
    );
}
