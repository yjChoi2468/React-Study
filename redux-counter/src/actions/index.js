import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
})

export const decrement = () => ({
    type: types.DECREMENT
})

export const set_color = (color) => ({
    type: types.SET_COLOR,
    color
})