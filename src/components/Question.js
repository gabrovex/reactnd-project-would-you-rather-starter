import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {

  render() {
    return (
      <div>
        {this.props.id}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {

  return {
    questions,
    id
  };
}

export default connect(mapStateToProps)(Question);
