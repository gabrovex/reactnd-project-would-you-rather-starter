import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFormattedAnswered} from '../utils/helpers'

class QuestionAnswered extends Component {
  render() {
    const { question } = this.props;
    
    return (  
      <div>
          {question.options.map((option, i) => 
            <div key={i} className={option.isChosen ? 'answeredQuestion' : ''}>
              {`${option.text} - ${option.votes}/${question.totalVotes}`}
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }, { id }) {

  return {
    question: getFormattedAnswered(questions[id], questions)
  };
}

export default connect(mapStateToProps)(QuestionAnswered);
