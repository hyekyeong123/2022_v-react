import {useState, useCallback, useReducer} from "react";

// *************************** 커스텀 훅 만들기 *************************************
function useInputs(_initialForm){
  const [form, setForm] = useState(_initialForm);

  // input창의 내용이 변경될 때마다
  const onChange = useCallback(e => {
    const {name, value} = e.target;

    setForm(form => ({
      ...form,
      [name]:value
    }))
  },[])

  // form 초기화
  const resetForm = useCallback(()=>setForm(_initialForm),[_initialForm]);

  // 정의한 함수들 내보내기
  return [form, onChange, resetForm];
}
export default useInputs;

