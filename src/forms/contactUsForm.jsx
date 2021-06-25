import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import { MUIButton } from "../atoms/button";
import styles from "../../styles/forms.module.scss";

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.mail = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }
};

export function ContactUsForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            fname: "",
            lname: "",
        },
        validate,
    });
    return (
        <div className={styles.formContainer}>
            <form
                action="https://gmail.us6.list-manage.com/subscribe/post"
                method="POST"
                className={styles.form}
            >
                <input
                    type="hidden"
                    name="u"
                    value="e654510bb63cf53256868ec7e"
                />
                <input type="hidden" name="id" value="096b104afc" />
                <label htmlFor="email">
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        id="email"
                        name="EMAIL"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className={
                            formik.errors.email ? `${styles.errorsInput}` : ""
                        }
                        error={formik.errors.email ? true : ""}
                    />
                </label>
                <label htmlFor="fname">
                    <TextField
                        label="First Name"
                        variant="outlined"
                        id="fname"
                        name="FNAME"
                        type="text"
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                    />
                </label>
                <label htmlFor="lname">
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        id="lname"
                        name="LNAME"
                        type="text"
                        value={formik.values.fname}
                        onChange={formik.handleChange}
                    />
                </label>
                <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                />

                <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                    aria-label="Please leave the following three fields empty"
                >
                    <label htmlFor="b_name">Name: </label>
                    <input
                        type="text"
                        name="b_name"
                        tabIndex="-1"
                        value=""
                        placeholder="Freddie"
                        id="b_name"
                    />

                    <label htmlFor="b_email">Email: </label>
                    <input
                        type="email"
                        name="b_email"
                        tabIndex="-1"
                        value=""
                        placeholder="youremail@gmail.com"
                        id="b_email"
                    />

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea
                        name="b_comment"
                        tabIndex="-1"
                        placeholder="Please comment"
                        id="b_comment"
                    ></textarea>
                </div>
            </form>
        </div>
    );
}
