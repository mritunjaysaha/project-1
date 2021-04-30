import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export function SimpleMenu() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <li
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                services
            </li>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    Equity Capital Markets
                </MenuItem>
                <MenuItem onClick={handleClose}>Debt Capital Markets</MenuItem>
                <MenuItem onClick={handleClose}>M&amp;A Advisory</MenuItem>
                <MenuItem onClick={handleClose}>Direct Investments</MenuItem>
            </Menu>
        </div>
    );
}
