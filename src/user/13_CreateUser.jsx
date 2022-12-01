import React from 'react';

export default function CreateUser({username, email, onChange, onCreate}) {
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

