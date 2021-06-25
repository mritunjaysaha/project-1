import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "../../styles/contactUs.module.scss";
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
    root: {
        "& .MuiInputBase-input": {
            color: "white",
        },
        "& label": { color: "white" },
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "green",
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },
            "&:hover fieldset": {
                borderColor: "yellow",
            },
            "&.Mui-focused fieldset": {
                borderColor: "green",
            },
        },
    },
})(TextField);

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    fname: yup.string("Enter your name"),
    lname: yup.string("Enter your name"),
    tel: yup.number("Enter Contact Number").min(1000000000),
});

const WithMaterialUI = () => {
    const formik = useFormik({
        initialValues: {
            email: "foobar@example.com",
            password: "foobar",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={styles.contactUsFormContainer}>
            <form onSubmit={formik.handleSubmit}>
                <CssTextField
                    fullWidth
                    variant="outlined"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <CssTextField
                    fullWidth
                    variant="outlined"
                    id="fname"
                    name="fname"
                    label="First Name"
                    type="fname"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    error={formik.touched.fname && Boolean(formik.errors.fname)}
                    helperText={formik.touched.fname && formik.errors.fname}
                />
                <CssTextField
                    fullWidth
                    variant="outlined"
                    id="lname"
                    name="lname"
                    label="Last Name"
                    type="lname"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    error={formik.touched.fname && Boolean(formik.errors.fname)}
                    helperText={formik.touched.fname && formik.errors.fname}
                />

                <CssTextField
                    fullWidth
                    variant="outlined"
                    id="tel"
                    name="tel"
                    label="Contact Number"
                    type="tel"
                    value={formik.values.tel}
                    onChange={formik.handleChange}
                    error={formik.touched.tel && Boolean(formik.errors.tel)}
                    helperText={formik.touched.tel && formik.errors.tel}
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

                <WithMaterialUI />
            </div>
        </section>
    );
}
