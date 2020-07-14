import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class QuestionPreview extends Component {
  render() {
    const { question } = this.props;

    return (
      <div>
            Would you rather: {question.optionOne.text} or...
            <NavLink to={`/questions/${question.id}`}>View</NavLink>
      </div>
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  return {
    question: questions[id]
  };
}

export default connect(mapStateToProps)(QuestionPreview);
