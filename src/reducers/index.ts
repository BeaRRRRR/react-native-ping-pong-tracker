import { ActionTypes, RootAction } from '../actions';
import { createReducer } from 'typesafe-actions';

export interface StateModel {
    firstPlayer: {
        name: string,
        score: number
    },
    secondPlayer: {
        name: string,
        score: number
    }
}

const initialState: StateModel = {
    firstPlayer: {
        name: '',
        score: 0
    },
    secondPlayer: {
        name: '',
        score: 0
    }
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction;
    }
}

export const rootReducer = createReducer(initialState)
    .handleType(ActionTypes.SET_FIRST_PLAYER_NAME, (state: StateModel, action: RootAction) => {
        return {
            ...state,
            firstPlayer: {
                ...state.firstPlayer,
                name: action.payload
            }
        }
    })
    .handleType(ActionTypes.SET_SECOND_PLAYER_NAME, (state: StateModel, action: RootAction) => {
        return {
            ...state,
            secondPlayer: {
                ...state.secondPlayer,
                name: action.payload
            }
        }
    })
    .handleType(ActionTypes.SET_FIRST_PLAYER_SCORE, (state: StateModel, action: RootAction) => {
        const score = action.payload >= 0 ? action.payload : state.firstPlayer.score;
        return {
            ...state,
            firstPlayer: {
                ...state.firstPlayer,
                score,
            }
        }
    })
    .handleType(ActionTypes.SET_SECOND_PLAYER_SCORE, (state: StateModel, action: RootAction) => {
        const score = action.payload >= 0 ? action.payload : state.secondPlayer.score;
        return {
            ...state,
            secondPlayer: {
                ...state.secondPlayer,
                score
            }
        }
    });

