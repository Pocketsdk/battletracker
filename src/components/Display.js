import React from 'react';
import redux from 'react-redux';
import { useState } from 'react';
import "../tailwind.output.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { scoreReducer } from '../Reducers/scoreReducer';



const Display = () => {
    const score = useSelector( state => state.scoreReducer );

    return (
        <>
            <h1>Display Page</h1>
            {score}
        </>
    );
}

export default Display;