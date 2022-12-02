import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import useInputs from "./hooks/useInputs";
import useInputs_Reducer from "./hooks/useInputs_Reducer";
// ********************************
function reducer(state, action){
  switch (action.type){
    case 'CREATE_USER':
      return{
        inputs:initialState.inputs,
        users:state.users.concat(action.newUser)
      }
    case "TOGGLE_USER":
      return{
        ...state,
        users:state.users.map(_user => (
          _user.id === action.id
          ? {..._user, active:!_user.active}
          : _user
        ))
      }

    case "REMOVE_USER":
      return{
        ...state,
        users:state.users.filter(_user => _user.id !== action.id)

      }
    default:
      throw new Error("Unhanded action");
  }
}
// ****************************************************************
function UserContainer_H() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;

  const nextId = useRef(4);

  // const [form, onChange, reset] = useInputs({
  //   username:'',
  //   email:'',
  // })
  const [form, onChange, reset] = useInputs_Reducer({
    username:'',
    email:'',
  })
  const {username, email} = form;
  //***********************
  const onCreate = useCallback(() => {
    dispatch({
      type:"CREATE_USER",
      newUser:{
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
    reset();
  },[username, email, reset])

  const onToggle = useCallback((modifyId)=>{
    dispatch({
      type:"TOGGLE_USER",
      id: modifyId
    })
  })

  const onRemove = useCallback((removeId)=>{
    dispatch({
      type:"REMOVE_USER",
      id: removeId
    })
  })

  // 활성 사용자 수 구하기
  function countActiveUsers(user){
    return users.filter(user => user.active).length;
  }
  const count = useMemo(() => countActiveUsers(users), [users]);

  //***********************************************
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
        onToggle={onToggle}
        onRemove={onRemove}
      />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
};
export default React.memo(UserContainer_H);
// ****************************************************************
const initialState = {
  users: [
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
  ]
}