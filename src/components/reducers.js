import { UPDATE_SCORE_P1, UPDATE_SCORE_P2 } from './actions';

export const updateScoreP1 = (state = 0, action) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_SCORE_P1: {
            const { score } = payload;
            return score;
        }
        default:
            return state;
    }
}

export const updateScoreP2 = (state = 0, action) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_SCORE_P2: {
            const { score } = payload; 
            return score;
        }
        default:
            return state;
    }
}