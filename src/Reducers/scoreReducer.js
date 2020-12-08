const scoreReducer = ( state=[], action) => {
    switch (action.type) {
        case 'UPDATE_SCORE_P1':
            const newScore = action.payload;
            return newScore;
    }
}
export default scoreReducer;