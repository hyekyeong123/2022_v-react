import {useState, useCallback, useReducer} from "react";

function reducer(state, action){
  switch (action.type){
    case 'INPUT_CHANGE':
      return{
        ...state,
        [action.name] : action.value
      }
    case 'INPUT_RESET':
      return {
        state : action._initialForm
      }
    default:
      throw new Error("올바른 액션 형식이 아닙니다.");
  }
}

// *************************** 커스텀 훅 만들기 *************************************
function useInputs_Reducer(_initialForm){
  const [form, dispatch] = useReducer(reducer, _initialForm);

  // input창의 내용이 변경될 때마다
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type:"INPUT_CHANGE",
      name,
      value
    })
  },[])

  // form 초기화
  const resetForm = useCallback(()=>dispatch({type:"INPUT_RESET", _initialForm}));

  // 정의한 함수들 내보내기
  return [form, onChange, resetForm];
}
export default useInputs_Reducer;

