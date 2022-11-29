import React from 'react';
// *****************************************************************************
function User({user}){
  return(
    <div>
      <b>{user.username}</b><span>{user.email}</span>
    </div>
  )
}
// *****************************************************************************
export default function UserList_N({users}) {
 // ******************************************
  return (
    <div>
      {
        users.map(
          user => (<User key={user.id} user={user}/>)
        )
      }
    </div>
  );
};