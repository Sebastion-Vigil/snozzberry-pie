import React from 'react';

import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="page">
          <div className="section menu"></div>
          <div className="section header">
            <div className="header" />
          </div>
          <div className="section content">
            <div className="content-img" />
          </div>
          <div className="section sign-up">
            <div className="sign-up-img" />
          </div>
          <div className="section feature-1">
            <div className="feature-img" />
          </div>
          <div className="section feature-2">
            <div className="feature-img" />
          </div>
          <div className="section feature-3">
            <div className="feature-img" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
