// React
import React, { Component, PropTypes } from 'react';
// Component
import Header from '../components/shared/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="main container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
