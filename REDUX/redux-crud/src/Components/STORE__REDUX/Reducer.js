import { ADD_HERO } from "./ActionTypes";

const defaultstate={
    movies :["Salaar" , "Project-K" , "Adhipurush" , "Spirit"],
    Heroes:[],
    directors:[],
    persons:[]
  };

export const reducer = (state = defaultstate , actions)=>{
    switch (actions.type) {
        case "ADDHERO":
          let newHero = [...state.Heroes]; 
          newHero.push(actions.payload);   
          return {...state , Heroes: newHero};
          
        case "DELETEHERO":
            let updatedHeroes = state.Heroes.filter((user)=> user !== actions.payload)
            return {...state , Heroes: updatedHeroes};

        case ADD_HERO:
          let newHeroes = [...state.Heroes];    
          newHeroes.push(actions.payload);
          return {...state , Heroes:newHeroes};

        default:
            return state;
    }
};