import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateScoreP1, updateScoreP2 } from './actions';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import Mission from './List/Mission';
import ObjectivesOne from './ObjectivesOne';
import ObjectivesTwo from './ObjectivesTwo';



const Input = ({ score, onAnyChange }) => {

    return (
        <>
            <div className= "flex flex-row space-x-2 px-2 pt-2 justify-center items-center bg-blue-600">
                <div>
                    <PlayerOne />
                </div>
                <div className="border-2 rounded-lg bg-blue-500 w-24 h-24 p-2 shadow-lg text-center">
                    <h2 className="dougs-header-text">Score</h2>
                    <p className="text-4xl text-white">0</p>
                </div>
                <div>   
                    <Mission />
                </div>
                <div className="border-2 rounded-lg bg-blue-500 w-24 h-24 p-2 shadow-lg text-center">
                    <h2 className="dougs-header-text">Score</h2>
                    <p className="text-4xl text-white">0</p>
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
      
    );
}

const mapStateToProps = state => ({
    score: state.score,
});
    
const mapDispatchToProps = dispatch => ({
    onAnyChange: score => dispatch(updateScoreP1(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);