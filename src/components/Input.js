import React, { createContext, useContext, useEffect, useState } from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import Mission from './List/Mission';
import ObjectivesOne from './ObjectivesOne';
import ObjectivesTwo from './ObjectivesTwo';
import {UserContext} from '../UserContext';


const Input = () => {

    return (
        <UserContext.Consumer>
        {user => (
                <>
                <div className= "flex flex-row space-x-2 px-2 pt-2 justify-center items-center bg-blue-600">
                    <div>
                        <PlayerOne />
                    </div>
                    <div className="border-2 rounded-lg bg-blue-500 w-24 h-24 p-2 shadow-lg text-center">
                        <h2 className="dougs-header-text">Score</h2>
                        <p className="text-4xl text-white">{user.scorep1}</p>
                    </div>
                    <div>   
                        <Mission />
                    </div>
                    <div className="border-2 rounded-lg bg-blue-500 w-24 h-24 p-2 shadow-lg text-center">
                        <h2 className="dougs-header-text">Score</h2>
                        <p className="text-4xl text-white">{user.scorep2}</p>
                    </div>
                    <div>
                        <PlayerTwo />
                    </div>
                </div>
                <div className= "flex flex-row space-x-2 p-2 justify-center items-center bg-blue-600">
                    <div className="border-2 rounded-lg bg-blue-500 p-2 shadow-lg">
                        <ObjectivesOne />
                    </div>
                    <div className="border-2 rounded-lg bg-blue-500 p-2 shadow-lg">
                        <ObjectivesTwo />
                    </div>
                </div>
                </>
        )}
    </UserContext.Consumer>
    );
}

export default Input;