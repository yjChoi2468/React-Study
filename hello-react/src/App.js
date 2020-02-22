import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000000'
        };
    }
    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Random Color</button>
                <LifeCycleSample color={this.state.color}></LifeCycleSample>
            </div>
        );
    }
}

export default App;

/**
 * ScrollBox 예제 에러나는거 원인 및 해결법 확인 필요
 */
// function App() {
//     let scrollBox = React.createRef();

//     return (
//         <div>
//             <ScrollBox ref={scrollBox}></ScrollBox>
//             <button onClick={() => scrollBox.scrollToBottom()}>맨 밑으로</button>
//         </div>
//     );
// }
