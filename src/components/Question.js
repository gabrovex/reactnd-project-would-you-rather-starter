import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview'
import QuestionAnswered from './QuestionAnswered'
import QuestionUnanswered from './QuestionUnanswered'
import Page404 from './Page404'

class Question extends Component {
  render() {
    const {author, id, isPreview, isAnswered} = this.props
    if (id === undefined) {
      return <Page404 />;
    }
    return (
      <div>
            Asked by {author.name}
            <img src={author.avatarURL} alt={author.name} width="50" />
            { isPreview ?  <QuestionPreview id={id} /> : isAnswered ? <QuestionAnswered id={id} /> : <QuestionUnanswered id={id} />}             
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  let id = props.id ?? props.match.params.id
  const question = questions[id]
   if (!Object.keys(questions).includes(id)) {
    return
   }
  return {
    author: users[question.author],
    id,
    isAnswered: [...question.optionOne.votes,...question.optionTwo.votes].includes(authedUser),
  };
}

export default connect(mapStateToProps)(Question);
