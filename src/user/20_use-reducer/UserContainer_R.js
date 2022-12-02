import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from "./UserList_R";
import CreateUser from "./CreateUser_R";
// ********************************
function reducer(state, action){
  switch (action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name] : action.value
        }
      };

    case 'CREATE_USER':
      return{
        inputs:initialState.inputs,
        users:state.users.concat(action.user)
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
function UserContainer_R() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  const {username, email} = state.inputs;

  const nextId = useRef(4);
  //***********************
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch(
      {type:"CHANGE_INPUT"},
      name,
      value
    )
  },[])

  const onCreate = useCallback(() => {
    dispatch({
      type:"CREATE_USER",
      user:{
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
  },[username, email])

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
export default React.memo(UserContainer_R);
// ****************************************************************
const initialState = {
  inputs:{
    username:"",
    email:""
  },
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