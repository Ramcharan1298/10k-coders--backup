import { ADD_HERO } from "./ActionTypes"

// this phase is we called ACTIONS
export const addingHero=()=>{
  return {
    type:"ADDMOVIE",
    payload:"Maruthi Film"
  }
}

export const deletingHero=(movie)=>{
  return {
    type:"DELETEMOVIE",
    payload:movie
  }
}

export const addHeroAction = (Hero)=>{
  return {
    type: ADD_HERO,
    payload : Hero
  }
}