import React from 'react';

const PlayerOne = () => {
    return (
        <>
            <h1>Player One</h1>
            <select name="factions" id="factions">
                <option value="space-marines">Space Marines</option>
                <option value="necrons">Necrons</option>
                <option value="tao">Tao</option>
            </select>
        </>
    );
}

export default PlayerOne;