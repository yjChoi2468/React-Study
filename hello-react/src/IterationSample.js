import React, { Component } from 'react';

class IterationSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['눈사람', '얼음', '눈', '바람'],
            name: ''
        };
    }
    handleChange = e => {
        this.setState({
            name: e.target.value
        });
    };
    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    };
    handleRemove = removeIndex => {
        this.setState({
            names: this.state.names.filter((item, index) => index !== removeIndex)
        });
    };

    render() {
        const nameList = this.state.names.map((name, index) => (
            <li key={index} onDoubleClick={() => this.handleRemove(index)}>
                {name}
            </li>
        ));
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.name}></input>
                <button onClick={this.handleInsert}>Add</button>
                <ul>{nameList}</ul>
            </div>
        );
    }
}

export default IterationSample;
