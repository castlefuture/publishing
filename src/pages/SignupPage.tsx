import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
    <div className="m-4">
      <div className="text-3xl font-bold mb-10">회원가입</div>
      <div>
        <TextField label="아이디" placeholder="아이디" />
        <TextField label="비밀번호" placeholder="비밀번호" />
        <TextField label="이름" placeholder="이름" />
        <TextField label="전화번호" placeholder="전화번호" />
      </div>

      <div>
        <div className="bg-gray-800 text-white text-center mt-4 py4">
          회원가입
        </div>
      </div>
    </div>
  );
};
