import React, {useRef, useState, useMemo, useCallback} from 'react';
import UserList from "../23_context/UserList";
import CreateUser from "../23_context/CreateUser";

function User() {
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
  const onChange = useCallback((e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  },[inputs]);

  // 배열 추가하기
  const onCreate = useCallback(() => {
    alert("username : "+username);
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
    setUsers(users => [...users, newUser]);
  },[username, email])

  // 배열 삭제
  const onRemove = useCallback((deleteId) => {
    setUsers(users=>users.filter(user => user.id !== deleteId))
  },[]);

  // 배열 수정하기
  const onToggle = useCallback((modifyId) => {
    setUsers(users => users.map(
      user => user.id === modifyId
      ? {...user, active: !user.active}
      : user
    ))
  },[])

  // 액티브한 유저 수 가져오기
  // useMemo를 사용하지 않을경우 input창에 타자만 입력해도 계속해서 수를 셈
  function countActiveUsers(user){
    console.log(`[JHG] 활성 사용자 수를 세는 중...`);
    return users.filter(user => user.active).length;
  }
  const count = useMemo(() => countActiveUsers(users), [users]);
// ******************************************
  return (
    <>
      {/* 유저 생성 input */}
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
      <div>활성 사용자 수 : {count}</div>
    </>
  );
};

export default React.memo(User);