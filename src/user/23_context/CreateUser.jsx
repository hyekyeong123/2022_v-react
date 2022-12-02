import React from 'react';

function CreateUser({username, email, onChange, onCreate}) {
  // *********************************************
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button type="text" onClick={onCreate}>새로운 계정 생성하기</button>
    </div>
  );
};

// React.memo를 사용하면 props가 바뀔때에만 실행ㄴㄴ
export default React.memo(CreateUser);