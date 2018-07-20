import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './Styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'

const tasks = ['take out trash', 'take out trash again', 'shovel driverway', 'walk the dog']

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
