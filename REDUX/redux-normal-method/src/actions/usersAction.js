import { ADD_USER, DELETE_USER, UPDATE_USER } from "./actionTypes"

export const addUserAction=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}


export const deleteuserAction=(user)=>{
    return{
        type:DELETE_USER,
        payload:user
    }
}


export const updateuserAction=(user)=>{
   return{
    type:UPDATE_USER,
    payload:user
   }
}