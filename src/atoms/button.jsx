import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export function MUIButton({ name, color, size, type }) {
    return (
        <Button
            variant="contained"
            // color={color ? color : "primary"}
            // size={size ? size : "medium"}
            type={type ? type : ""}
            style={{ background: "#fff" }}
        >
            {name ? name : "temp"}
        </Button>
    );
}
