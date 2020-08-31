import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/App.css';
import Nav from './page-components/Nav';
import Home from './page-components/Home';
import Ideas from './page-components/Ideas';
import Strategy from './page-components/Strategy';
import Contact from './page-components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Breadcrumbs from './page-components/Breadcrumbs';




function App() {
    return (
        <Router>
            <div className="App">
                <Route render={({location}) => (
                    <TransitionGroup>
                        
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade">
                                
                            <Switch location={location}>
                                <Route path="/" exact component={Home}/>
                                <Route path="/ideas" component={Ideas}/>
                                <Route path="/strategy" component={Strategy}/>
                                <Route path="/contact" component={Contact}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </div>
        </Router>
        
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
