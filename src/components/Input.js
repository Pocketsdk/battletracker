import React, { useState } from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import Mission from './List/Mission';
import ObjectivesOne from './ObjectivesOne';
import ObjectivesTwo from './ObjectivesTwo';

const Input = () => {

    const [p2Score, setp2Score] = useState(0);
    const [p1Score, setp1Score] = useState(0);

    return (
        <>
            <div className= "flex flex-row space-x-2 p-2 justify-center items-center bg-blue-600">
                <div>
                    <PlayerOne />
                </div>
                <div className="border-2 rounded-lg bg-blue-500 w-24 h-24 p-2 shadow-lg text-center">
                    <h2 className="dougs-header-text">Score</h2>
                    <p className="text-4xl text-white">{p1Score}</p>
                </div>
                <div>   
                    <Mission />
                </div>
                <div className="border-2 rounded-lg bg-blue-500 w-24 h-24 p-2 shadow-lg text-center">
                    <h2 className="dougs-header-text">Score</h2>
                    <p className="text-4xl text-white">{p2Score}</p>
                </div>
                <div>
                    <PlayerTwo />
                </div>
            </div>
            <div>
                <ObjectivesOne />
            </div>
            <div>
                <ObjectivesTwo />
            </div>
        </>
      
    );
}

export default Input;