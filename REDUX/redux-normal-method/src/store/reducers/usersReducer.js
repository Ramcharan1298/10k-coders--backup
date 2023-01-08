import { ADD_USER, DELETE_USER, UPDATE_USER } from "../../actions/actionTypes";
import { defaultState } from "./defaultState";

export const usersReducer = (state=defaultState , action)=>{
    switch (action.type) {
       
        case ADD_USER:
            const newUsers = [...state.users];
            newUsers.push(action.payload);
            return {...state , users:newUsers};
        
       
        case DELETE_USER:
            return {...state , users :state.users.filter((user)=>user.email !== action.payload.email)}
       
        
        case UPDATE_USER:
            let everyuser = [...state.users];
            everyuser.forEach((user , i)=>{
                if (user.email === action.payload.email){
                    everyuser[i] = action.payload;
                }
            });
            return {...state, users:everyuser};

        default:
            return state;
    }
};  