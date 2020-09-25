import React, {Component} from 'react';
import './App.css';  
import List from './Components/list';
import Cart from './images/cart.png';

class App extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar bg-dark navbar-dark">
            <img src={Cart} alt="cart"></img>
            <a className="navbar-brand">Malang Market</a>
        </nav>
        <div>
          <List />
        </div>
      </div>
    );
  }
}

export default App;
