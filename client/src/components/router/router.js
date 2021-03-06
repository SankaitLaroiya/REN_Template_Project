import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';

// Import components here
import App from '../app/app';
import AnotherPage from '../anotherPage/anotherpage';

const browserHistory = createBrowserHistory();

// Add your routes here
class CustomRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/anotherpage" component={AnotherPage}/>
                </Switch>
            </Router>
        );
    }
}

export default CustomRouter;