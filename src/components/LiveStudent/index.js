import React, { Component } from 'react';

class LiveStudent extends Component {
  render() {
    const { student } = this.props;
    return (<div className="card live-student text-white fas fa-fish">
        <div className="card-body">
          <h4 className="im-alive">{ student.firstName } { student.lastName }</h4>
          </div>
      </div>);
  }
}

export default LiveStudent;
