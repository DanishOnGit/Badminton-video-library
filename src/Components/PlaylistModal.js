import { useState } from "react";
import {useVideo} from "../Contexts";
import { v4 as uuidv4 } from 'uuid';
// import {playlists} from "./Playlists";


function UserPlaylists({item}){
  return <li>
  <input id={item.listId} type="checkbox" />
  <label for={item.listId}>{item.listName}</label>
</li>
}


export function PlaylistModal({display,setDisplay,videoDetails}) {

  const [playlistName,setPlaylistName]=useState("");
  
  const {state:{playlists},dispatch} = useVideo();

  function createNewPlaylist(playlistName){
    // playlists.push( { listName:playlistName,listId:uuidv4(),listVideos:[] } );
    // setPlaylistName("")
    }

   
  return (
    <div className="modal-wrapper " style={{width:"25rem",height:"auto",display:display}}>
      <div className="modal-header">
        <h2>Add to Playlist</h2>
        <span>
          <i className="fas fa-times"></i>
        </span>
      </div>
      <div className="modal-body">
          <ul className="list-non-bullet">
           {playlists.map(item=>{
             return  <UserPlaylists item={item}/>
           })}
          </ul>
       <div>
         <input value={playlistName} onChange={(e)=>setPlaylistName(e.target.value)} type="text" placeholder="Add new playlist" />
         <button disabled={playlistName===""?true:false} onClick={()=>createNewPlaylist(playlistName)} className="btn btn-primary"><i className="fas fa-plus"></i></button>
         </div>
      </div>
      <div className="modal-footer">
        <button onClick={()=>setDisplay("none")} className="btn btn-outline-secondary" id="closeMe">
          Close
        </button>
        {/* <button onClick={()=>addToPlaylists} className="btn btn-primary">Add</button> */}
      </div>
    </div>
  );
}
