import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Intro from './components/Intro/Intro';
import Home from './components/Home';
import About from './components/About';



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