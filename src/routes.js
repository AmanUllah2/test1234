import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Components/home'
import Login from './Components/login'
import Signup from './Components/signup'

class Routes extends React.Component{
    render(){
        return(
                <Switch>
                    <Route path="/" exact component={Home}/>      
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={Signup}/>                    
                </Switch>
        )
    }
}

export default Routes;