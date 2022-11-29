import React, {useRef} from 'react';
import UserList from "./11_UserList_D";

export default function User_N() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
 // ******************************************
  return (
    <UserList users={users}/>
  );
};