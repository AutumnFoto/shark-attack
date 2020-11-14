import React, { Component } from 'react';

class Gravestone extends Component {
  render() {
    const { student } = this.props;
    return (<div className="card gravestone">
        <div className="card-body">
          <h4 className="card-text text-white here-lies">Here Lies { student.firstName } { student.lastName }</h4>
          <i className="fas fa-skull-crossbones text-white"></i>
        </div>
      </div>);
  }
}

export default Gravestone;
