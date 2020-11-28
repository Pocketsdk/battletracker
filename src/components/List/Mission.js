import React, { useState } from 'react';
import "../../tailwind.output.css";

const Mission = () => {

    const [gameSize, setGameSize] = useState('CombatPatrol');

    return (
        <>
            <form>
                <p>Gamesize: {gameSize}</p>
                <div className="border-2 rounded-lg bg-gray-500 w-min p-2 shadow-lg">
                    <h2 className="dougs-header-text">Game Size</h2>
                    <select name="game-size" id="game-size" onChange={(event) => setGameSize(event.target.value)}>
                        <option value="combat-patrol">Combat Patrol</option>
                        <option value="incursion">Incursion</option>
                        <option value="strike-force">Strike Force</option>
                        <option value="onslaught">Onslaught</option>        
                    </select>

                    <h2 className="dougs-header-text">Mission</h2>
                    <select name="missions" id="missions">
                        <option value="outriders">Outriders</option>
                        <option value="incisive-attack">Incisive Attack</option>
                        <option value="encircle">Encircle</option>
                    </select>

                    <h2 className="dougs-header-text">Points</h2>
                    <label className="hidden" htmlFor="points">Points</label>
                    <input type="number" id="points" name="points" />
                </div>
            </form>
        </>
    );
}
export default Mission;