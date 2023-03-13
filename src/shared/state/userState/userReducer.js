import { FETCH_USER_SUCCESS } from "./actionTypes";



export const initialState = {
    isLoading: false,
    error: false,
    user :{}
};

export const UserReducer = (state,action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user:action.payload
            }
            
        default: return state;
    }
    
}
