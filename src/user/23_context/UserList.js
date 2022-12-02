import React,{useEffect} from 'react';
import UserItem from "./UserItem";
// *****************************************************************************
function UserList({users, onRemove, onToggle}) {
 // ******************************************
  return (
    <div>
      {
        users.map(
          user => (
          <UserItem
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />)
        )
      }
    </div>
  );
};
export default React.memo(UserList);