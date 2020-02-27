// import React, { Component } from 'react';
// import LifeCycleSample from './LifeCycleSample';
// import ErrorBoundary from './ErrorBoundary';

// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: '#000000'
//         };
//     }
//     handleClick = () => {
//         this.setState({
//             color: getRandomColor()
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>Random Color</button>
//                 <ErrorBoundary>
//                     <LifeCycleSample color={this.state.color}></LifeCycleSample>
//                 </ErrorBoundary>
//             </div>
//         );
//     }
// }



// /**
//  * ScrollBox 예제 에러나는거 원인 및 해결법 확인 필요
//  */
// // function App() {
// //     let scrollBox = React.createRef();

// //     return (
// //         <div>
// //             <ScrollBox ref={scrollBox}></ScrollBox>
// //             <button onClick={() => scrollBox.scrollToBottom()}>맨 밑으로</button>
// //         </div>
// //     );
// // }
import React, { useRef, createRef, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [renderIndex, setRenderIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();
  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }
  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
  }
  return (
    <div className="App">
      Current render index: {renderIndex}
      <br />
      First render index remembered within refFromUseRef.current:
      {refFromUseRef.current}
      <br />
      First render index unsuccessfully remembered within
      refFromCreateRef.current:
      {refFromCreateRef.current}
      <br />
      <button onClick={() => setRenderIndex(prev => prev + 1)}>
        Cause re-render
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;