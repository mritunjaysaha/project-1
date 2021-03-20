import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export function MUIButton({ name, color, size }) {
    return (
        <Button
            variant="contained"
            color={color ? color : "primary"}
            size={size ? size : "medium"}
        >
            {name ? name : "temp"}
        </Button>
    );
}
