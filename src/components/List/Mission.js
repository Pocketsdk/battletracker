import React from 'react';

const Mission = () => {
    return (
        <>
            <h2>Game Size</h2>
            <select name="game-size" id="game-size">
                <option value="combat-patrol">Combat Patrol</option>
                <option value="incursion">Incursion</option>
                <option value="strike-force">Strike Force</option>
                <option value="onslaught">Onslaught</option>        
            </select>

            <h2>Mission</h2>
            <select name="missions" id="missions">
                <option value="outriders">Outriders</option>
                <option value="incisive-attack">Incisive Attack</option>
                <option value="encircle">Encircle</option>
            </select>

            <h2>Points</h2>
            <label for="points">Points</label>
            <input type="number" id="points" name="points" />
        </>
    );
}
export default Mission;