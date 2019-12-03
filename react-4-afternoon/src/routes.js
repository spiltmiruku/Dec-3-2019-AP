import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';
import History from './components/History/History';
import Contact from './components/Contact/Contact';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/classlist/:class' component={ClassList} />
        <Route path='/student/:id' component={Student} />
        <Route path='/history' component={History} />
        <Route path='/contact' component={Contact} />
    </Switch>
)
