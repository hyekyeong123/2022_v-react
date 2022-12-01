import React, {useRef, useState} from 'react';
import UserList from "./11_UserList";
import CreateUser from "./13_CreateUser";

export default function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active:true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:false,
    }
  ]);
// ***************************
  const [inputs, setInputs] = useState({
    username:"",
    email:""
  });
  const {username, email} = inputs;

  const nextId = useRef(4);
  // 굳이 useRef로 한 이유는 이 값이 바뀔때마다 컴포넌트가 리렌더링 할 필요가 없기 때문

// ******************************************
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }

  // 배열 추가하기
  const onCreate = () => {
    console.log("[JHG] nextId.current : "+nextId.current);
    nextId.current += 1;

    setInputs({
      username: "",
      email: ""
    });

    const newUser = {
      id:nextId.current,
      username,
      email
    };
    setUsers([...users, newUser]);
  }

  // 배열 삭제
  const onRemove = (deleteId) => {
    setUsers(users.filter(user => user.id !== deleteId))
  }

  // 배열 수정하기
  const onToggle = (modifyId) => {
    setUsers(users.map(
      user => user.id === modifyId
      ? {...user, active: !user.active}
      : user
    ))
  }
// ******************************************
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
};