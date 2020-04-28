import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/App.css';
import Nav from './page-components/Nav';
import Home from './page-components/Home';
import Ideas from './page-components/Ideas';
import Strategy from './page-components/Strategy';
import Contact from './page-components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/ideas" component={Ideas}/>
                    <Route path="/strategy" component={Strategy}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
