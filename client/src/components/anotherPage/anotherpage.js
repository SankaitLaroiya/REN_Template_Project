import React, {Component} from 'react';
import './anotherpage.css';

class AnotherPage extends Component {

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
                 <p>Hello World! from Another Page</p>

                 {(this.state.serverMessage !== '') ? <p>{this.state.serverMessage}</p> : ''}
                
            </div>
        );
    }
}

export default AnotherPage;