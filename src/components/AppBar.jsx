import React from "react";
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';



const AppBar = () => {
    return(
        <div>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h1>Menu</h1>
                    <Link to="/">Login</Link>
                    <Link to="/game">Game</Link>
                    <Link to="/account">Account</Link>
                    <Link to="/unityGame">Unity Game</Link>
                </Typography>
        </div>
    );
};

export default AppBar;