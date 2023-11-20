import React, { useState } from "react";
import axios from "axios";

function HJLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://172.17.200.74:8080/api/v1/auth/signin",
        {
          userEmail: email,
          userPassword: password,
        }
      );
      if (response.data.result) {
        console.log("로그인 성공!");
      } else {
        console.log("로그인 실패!");
      }
    } catch (error) {
      console.error("에러" + error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">로그인:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">비밀번호:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default HJLogin;
