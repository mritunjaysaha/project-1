import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

export function ImageAvatars({ name, img }) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ margin: "auto" }}>
            <Avatar alt={name} src={img} className={classes.large} />
        </div>
    );
}
