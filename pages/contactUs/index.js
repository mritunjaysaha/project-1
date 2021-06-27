import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "../../styles/contactUs.module.scss";
import { withStyles } from "@material-ui/core/styles";

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

const ContactUsForm = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });
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

        if (param === "firstName" && "firstName" in fieldValues) {
            temp.firstName = fieldValues.firstName ? "" : "Required";
        }

        if (param === "lastName" && "lastName" in fieldValues) {
            temp.lastName = fieldValues.lastName ? "" : "Required";
        }

        if (param === "phone" && "phone" in fieldValues) {
            temp.phone =
                fieldValues.phone.length > 9
                    ? ""
                    : "Minimum 10 numbers required.";
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
        console.log(e.target.id);
        validate(e.target.id);
    }

    return (
        <div className={styles.contactUsFormContainer}>
            <form
                action="https://gmail.us6.list-manage.com/subscribe/post"
                method="post"
            >
                <input
                    type="hidden"
                    name="u"
                    value="e654510bb63cf53256868ec7e"
                />
                <input type="hidden" name="id" value="61c025bc0d" />
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
                        onKeyUp={handleKeyUp}
                        error={errors.firstName}
                        helperText={errors.firstName}
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
                        onKeyUp={handleKeyUp}
                        error={errors.lastName}
                        helperText={errors.lastName}
                    />
                </div>

                <CssTextField
                    fullWidth
                    variant="outlined"
                    id="email"
                    name="EMAIL"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    error={errors.email}
                    helperText={errors.email}
                />

                <CssTextField
                    fullWidth
                    variant="outlined"
                    id="phone"
                    name="PHONE"
                    label="Contact Number"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    error={errors.phone}
                    helperText={errors.phone}
                />

                <Button variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

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
