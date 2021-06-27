import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { MUIButton } from "../../src/atoms/button";
import styles from "../../styles/newsletter.module.scss";

const NewsletterTextField = withStyles({
    root: {
        "& .MuiInputBase-input": {
            color: "#16161d",
        },
        "& label": { color: "#16161d" },
        "& label.Mui-focused": {
            color: "#16161d",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green",
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#16161d",
            },
            "&:hover fieldset": {
                // borderColor: "yellow",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#16161d",
            },
        },
    },
})(TextField);

const SignupForm = () => {
    const [values, setValues] = useState({ name: "", email: "" });

    const [errors, setErrors] = useState({});

    function validate(param, fieldValues = values) {
        let temp = { ...errors };

        if (param === "email" && "email" in fieldValues) {
            temp.email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(
                fieldValues.email
            )
                ? ""
                : "Email is not valid.";
        }

        if (param === "name" && "name" in fieldValues) {
            temp.name = fieldValues.name ? "" : "Required";
        }
        setErrors({ ...temp });

        if (fieldValues == values) {
            return Object.values(temp).every((x) => x == "");
        }
    }

    function handleChange(e) {
        e.preventDefault();
        setValues((values) => ({ ...values, [e.target.id]: e.target.value }));
    }

    function handleKeyUp(e) {
        validate(e.target.id);
    }

    return (
        <form
            action="https://gmail.us6.list-manage.com/subscribe/post"
            method="post"
            className={`${styles.form}`}
        >
            <input type="hidden" name="u" value="e654510bb63cf53256868ec7e" />
            <input type="hidden" name="id" value="61c025bc0d" />
            <label htmlFor="name"></label>
            <NewsletterTextField
                label="Name"
                defaultValue="admin"
                variant="outlined"
                id="name"
                name="NAME"
                type="name"
                onChange={handleChange}
                value={values.name}
                error={errors.name}
                onKeyUp={handleKeyUp}
                helperText={errors.name}
            />
            <br />
            <br />

            <label htmlFor="email"></label>
            <NewsletterTextField
                label="Email"
                defaultValue="admin@gmail.com"
                variant="outlined"
                id="email"
                name="EMAIL"
                type="email"
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                helperText={errors.email}
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
