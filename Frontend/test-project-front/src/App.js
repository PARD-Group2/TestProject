import styled from "styled-components";
import "./App.css";

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
  return (
    <Div>
      <h1>LDJ 2조 Main page</h1>
    </Div>
  );
}

export default App;
