import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import "./App.css";

// case 주영
import Login from "./test/joo/login"
import UserName from "./test/joo/userName"
import UserProvider from "./test/joo/userContext";

// case 현중
// import HJLogin from "./test/hyeon/login";

// case 광일
// import Login from './test/kwang/login';
// import LoginOk from './test/kwang/LoginOk'; 


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

  // case 현중
  // return (
  //   <div>
  //     <Div>
  //       <h1>LDJ 2조 Main page</h1>
  //     </Div>
  //     <HJLogin />
  //   </div>
  // );

  // case 광일
    // return (
    //     <Router>
    //         <Routes>
    //             <Route index path="/" element={<Login />}/>
    //             <Route path="/loginok" element={<LoginOk />}/>
    //         </Routes>
    //     </Router>
    // );

  // case 주영
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