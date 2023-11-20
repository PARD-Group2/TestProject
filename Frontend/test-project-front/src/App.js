import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./test/joo/login"
import UserName from "./test/joo/userName"
import UserProvider from "./test/joo/userContext";

// import HJLogin from "./test/hyeon/login";

import Login from './test/kwang/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginOk from './test/kwang/LoginOk'; // Dashboard 컴포넌트는 존재하지 않는 예시입니다. 실제 프로젝트에 맞게 수정하세요.


// 기본 배경 (for temp)
const Div = styled.div`
  /* 가로, 길이 */
  width: 50vw;
  height: 50vh;

  /* 배치 */
  margin: 25vh auto;
  justify-content: center;
  align-items: center;
  display: flex;

  /* 배경색 */
  background-color: aqua;
  border-radius: 30px;
`;

function App() {


  // // return (
  // //   <div>
  // //     <Div>
  // //       <h1>LDJ 2조 Main page</h1>
  // //     </Div>
  // //     <HJLogin />
  // //   </div>
  // // );

  //   return (
  //       <Router>
  //           <Routes>
  //               <Route index path="/" element={<Login />}/>
  //               <Route path="/loginok" element={<LoginOk />}/>
  //           </Routes>
  //       </Router>
  //   );

  return (
    <Router>

      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userName" element={<UserName />} />
        </Routes>
      </UserProvider>

    </Router>
  );

}

export default App;