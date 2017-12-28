import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form className="navbar-form" role="search">
          <div className="input-group add-on">
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div>
            <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"></input>
          </div>
        </form>
        </header>
        <div className="App-intro">
         <div className="container">
            <div className="row">
              <div className="col-xs-3">.col-sm-3</div>
              <div className="col-xs-3">.col-sm-3</div>
              <div className="col-xs-3">.col-sm-3</div>
              <div className="col-xs-3">.col-sm-3</div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
