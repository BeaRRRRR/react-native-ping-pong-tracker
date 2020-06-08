import { action, ActionType } from 'typesafe-actions';

export enum ActionTypes {
    SET_FIRST_PLAYER_NAME = 'SET_FIRST_PLAYER_NAME',
    SET_SECOND_PLAYER_NAME = 'SET_SECOND_PLAYER_NAME',
    SET_FIRST_PLAYER_SCORE = 'SET_FIRST_PLAYER_SCORE',
    SET_SECOND_PLAYER_SCORE = 'SET_SECOND_PLAYER_SCORE',
}

// Represents all possible action types
export type RootAction = ActionType<typeof setFirstPlayerName | typeof setSecondPlayerName | typeof setFirstPlayerScore | typeof setSecondPlayerScore>;

export const setFirstPlayerName = (name: string) =>
    action(ActionTypes.SET_FIRST_PLAYER_NAME, name)

export const setSecondPlayerName = (name: string) =>
    action(ActionTypes.SET_SECOND_PLAYER_NAME, name);

export const setFirstPlayerScore = (score: number) =>
    action(ActionTypes.SET_FIRST_PLAYER_SCORE, score);

export const setSecondPlayerScore = (score: number) =>
    action(ActionTypes.SET_SECOND_PLAYER_SCORE, score);
