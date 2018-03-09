import React, {Component} from 'react';
import './app.css';

class App extends Component {

    state = {
        serverMessage: ''
    }

    componentDidMount() {
        this.talkToServer();
    }

    async talkToServer() {
        const resp = await fetch('/sayHello');
        const body = await resp.json();

        if(body) {
            this.setState({serverMessage: body.message});
        }
    }

    render() {
        return (
            <div>
                 <p>Hello World!</p>

                 {(this.state.serverMessage !== '') ? <p>{this.state.serverMessage}</p> : ''}
                
            </div>
        );
    }
}

export default App;