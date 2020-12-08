const updateScoreP1 = newScore => {
    return {
        type: 'UPDATE_SCORE_P1',
        payload: newScore
    };
}

export {updateScoreP1};