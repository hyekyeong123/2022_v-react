import React, {useEffect} from "react";

export default function UserItem({user, onRemove, onToggle}){
  const {username, email, id, active} = user;
  // ******************************************
  return(
    <div>
      <b style={{
        color:active ? 'green':'black',
        cursor:"pointer"
      }}
         onClick={() => onToggle(id)}
      >
        {username}
      </b>
      <span> ({email})</span>
      <button type="text" onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}