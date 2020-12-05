import React, { useState } from 'react';
import Faction from './List/Faction';
import "../tailwind.output.css";

const PlayerOne = () => {

    return (
        <>
            <div className="border-2 rounded-lg bg-blue-700 w-min p-2 shadow-lg">
                <h2 className="dougs-header-one">Player One</h2>
                <Faction /> 
            </div>
        </>
    );
}

export default PlayerOne;