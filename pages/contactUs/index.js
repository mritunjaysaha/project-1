import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "../../styles/contactUs.module.scss";

const CssTextField = withStyles({
    root: {
        "& .MuiInputBase-input": {
            color: "#fafafa",
        },
        "& label": { color: "white" },
        "& label.Mui-focused": {
            color: "#fafafa",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green",
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#fafafa",
            },
            "&:hover fieldset": {
                // borderColor: "yellow",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#fafafa",
            },
        },
    },
})(TextField);

function ContactUsForm() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
    });

    function handleChange(e) {
        e.persist();
        setValues((values) => ({ ...values, [e.target.id]: e.target.value }));
    }

    return (
        <>
            <div className={styles.contactUsFormContainer}>
                <form
                    action="https://gmail.us6.list-manage.com/subscribe/post"
                    method="POST"
                >
                    <input
                        type="hidden"
                        name="u"
                        value="e654510bb63cf53256868ec7e"
                    />
                    <input type="hidden" name="id" value="096b104afc" />

                    <div className={styles.nameContainer}>
                        <CssTextField
                            fullWidth
                            variant="outlined"
                            id="firstName"
                            name="FNAME"
                            label="First Name"
                            type="text"
                            value={values.firstName}
                            onChange={handleChange}
                        />
                        <CssTextField
                            fullWidth
                            variant="outlined"
                            id="lastName"
                            name="LNAME"
                            label="Last Name"
                            type="text"
                            value={values.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <CssTextField
                        fullWidth
                        variant="outlined"
                        id="email"
                        name="EMAIL"
                        label="Email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                    />

                    <CssTextField
                        fullWidth
                        variant="outlined"
                        id="tel"
                        name="PHONE"
                        label="Contact Number"
                        type="tel"
                        value={values.contact}
                        onChange={handleChange}
                    />

                    <Button variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}

export default function ContactUsPage() {
    return (
        <section className={styles.contactUsSection}>
            <div className={styles.contentsContainer}>
                <h1>Get in touch with us</h1>
                <ContactUsForm />
            </div>
        </section>
    );
}
