import React, {useEffect} from "react";

export default function UserItem({user, onRemove, onToggle}){
  const {username, email, id, active} = user;

  useEffect(() => {
    console.log("[JHG] user 컴포넌트가 화면에 나타나거나 업데이트함");
    return () => {
      console.log("[JHG] user값이 바뀌기 전에 호출");
    };
  }, [user]);

  // ******************************************
  return(
    <div>
      <b style={{
        color:active ? 'green':'black',
        cursor:"pointer"
      }}
         onClick={() => onToggle(id)}
      >
        {user.username}
      </b>
      <span>{email}</span>
      <button type="text" onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
}