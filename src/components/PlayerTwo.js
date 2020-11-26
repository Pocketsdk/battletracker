import React from 'react';
import Faction from './List/Faction';

const PlayerTwo = () => {
    return (
        <>
            <div className="border-2 rounded-lg bg-blue-700 w-min p-2 shadow-lg">

                <h2 className="dougs-header-one">Player Two</h2>
                <Faction />
            </div> 
        </>
    );
}

export default PlayerTwo;