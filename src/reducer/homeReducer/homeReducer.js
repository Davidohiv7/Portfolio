import {  } from '../../actions_types/home/home_actions_types'

const initialState = {
    home: '',
};

const homeReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        // case ACTION_TYPE: {
        //     return {
        //         ...state,
        //     }
        // }
        default:
            return {...state}
    }
} 

export default homeReducer