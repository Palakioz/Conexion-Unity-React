import React from "react";
import Button from '@mui/material/Button';

const Game = ({count, plus}) => {
    return(
        <div>
            <h1>Game</h1>
            {count}
            <br />
            <Button variant="outlined" color="success" onClick={plus}>Aumentar</Button>

        </div>
    );
};

export default Game;