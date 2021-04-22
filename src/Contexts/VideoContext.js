import { createContext, useContext, useReducer } from "react";
// import {reducer} from "./Contexts";

const VideoContext=createContext();

export const VideoProvider= ({children})=> {

  const reducer=(state,action)=>{
    switch(action.type){
      case "LIKE_VIDEO":{
       return {...state,likedVideos:[...state.likedVideos,{...action.payload,existsInLikedVideos:true}]}
      }
      case "ADD_TO_WATCH_LATER":{
        return {...state,watchLaterVideos:[...state.watchLaterVideos,{...action.payload,existsInWatchLaterVideos:true}]}
       }
      
       case "ADD_TO_HISTORY":{
         return {...state,historyVideos:[...state.historyVideos,{...action.payload,existsInHistory:true}]}
        }
        case "ADD_TO_PLAYLISTS":{
          return {...state,playlists:[...state.playlists,{}]}
        }
      default:
          return state
    }
  } 
  const initialState={likedVideos:[],
  watchLaterVideos:[],
historyVideos:[],
playlists:[]
}

const [state,dispatch]=useReducer(reducer,initialState)
return (<VideoContext.Provider value={{state,dispatch}}>
  {children}
  </VideoContext.Provider>)
}

export const useVideo=()=>{
  return useContext(VideoContext)
}