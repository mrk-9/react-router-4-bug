import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


const Home = (props) => (
	<h3>Home</h3>
)
const About = (props) => (
	<h3>About</h3>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
		  <ul>
  			<li>
  				<NavLink to='/'>Home</NavLink>
  			</li>
  			<li>
  				<NavLink to='/about'>About</NavLink>
  			</li>
  		  </ul>
        </p>
		<Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

const connectedApp = connect()(App);

export default withRouter(connectedApp)
