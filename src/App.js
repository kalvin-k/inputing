import React, { Component } from 'react'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: '',
            badResponse: '',
        }
    }

    handleChange = (e) => {
        let { response, badResponse } = this.state
        response = e.target.value
        const responseLength = response.length
        const templateArray =  ['B', 'L', 'A']
        let newArray = templateArray.slice(0, responseLength).join('')

        this.setState({response2: newArray})
        this.setState({response: response})




    }

    render() {
        return (
          <div>
            <input
                name = 'first'
                value = {this.state.response}
                onChange = {this.handleChange}
            />
            <h1> I hear you saying {this.state.response}. Is that Correct? </h1>
            <h1> I hear you saing {this.state.response2}. Is that Correct? </h1>
            <h1> I'm gonna let you finish but Beyonce is {this.state.response} </h1>
          </div>
        );
      }
    }
export default App;
