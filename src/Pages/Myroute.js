import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Bag from './Bag';
import Watch from './Watch';
import Notfound from './Notfound';
import Shoes from './Shoes';
import Order from './Order';
import Earing from './Earing';
import Phone from './Phone';
import Ring from './Ring';
class Myroute extends Component {
    render() {
        return (
            <div>
               <Switch>
               <Route exact path='/' component={Home}></Route>
                <Route  path='/Bag' component={Bag}></Route>
                <Route  path='/Watch' component={Watch}></Route>
                <Route  path='/Shoes' component={Shoes}></Route>
                <Route  path='/Order' component={Order}></Route>
                <Route  path='/Earing' component={Earing}></Route>
                <Route  path='/Phone' component={Phone}></Route>
                <Route  path='/Ring' component={Ring}></Route>
                <Route component={Notfound}></Route>
               </Switch>
            </div>
        );
    }
}

export default Myroute;