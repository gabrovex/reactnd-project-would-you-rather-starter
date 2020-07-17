import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';

class QuestionUnanswered extends Component {

  state = {
    selectedOpt: null,
  };

  handleSelectOption = (e) => {
    const selectedOpt = e.target.value
    this.setState(() => ({
      selectedOpt
    }))
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const { question, dispatch } = this.props

    dispatch(handleAddQuestionAnswer(question, this.state.selectedOpt))
  };

  render() {
    const { question } = this.props;
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="radio" value="optionOne" onClick={this.handleSelectOption} name="question"/> {question.optionOne.text}
          <input type="radio" value="optionTwo" onClick={this.handleSelectOption} name="question" /> {question.optionTwo.text}
          <button type='submit'>Submit</button>
        </form>
    );
  }
}

function mapStateToProps({ questions }, { id }) {
  return {
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionUnanswered);
