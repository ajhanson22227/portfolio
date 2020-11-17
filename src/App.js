import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Intro from './Intro';
import Home from './Home';
import About from './About';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Intro} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Redirect to="/" />
            </Switch>
            
        </BrowserRouter>
    )
};


export default App;