import axios from 'axios';
import  { createContext, useContext, useReducer } from 'react';

const favoritesContext = createContext();

const API = "http://localhost:8000";

export const useFavorites = () => {
   return useContext(favoritesContext)
}


const INIT_STATE = {
  favorites: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}

const FavoriteContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  
  const addFavoriteToStorage = async (product) => {
     try {
      await axios.post(`${API}/favorites`, product)
     } catch (error) {
      console.log(error);
     }
  }

  const getFavorites = async () => {
    try {
      const { data } = await axios(`${API}/favorites`)
      dispatch({
        type: "GET_FAVORITES",
        payload: data
      })
    } catch (error) {
      
    }
  }

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`${API}/favorites/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  
  const value = {
    addFavoriteToStorage,
    removeFromFavorites,
    getFavorites,
    favorites: state.favorites
  }

  return (
    <favoritesContext.Provider value={value}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoriteContext;