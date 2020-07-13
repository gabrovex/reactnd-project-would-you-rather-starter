import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h3>Questions</h3>
        <ul >
          {this.props.questionCategories.map((category, i) => {
            return (
              <div  key={i}>
                <h2>{category.title}</h2>
                {category.ids.map((id) =>
                  <li  key={id}>
                    <Question id={id}/>
                  </li>
                )}
              </div>
            )
          } )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredIds = [];
  const unansweredIds = [];
  Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .map((id) => 
      [...questions[id].optionOne.votes, ...questions[id].optionTwo.votes].includes(authedUser) ? answeredIds.push(id)
        : unansweredIds.push(id)
    );
  return {
    questionCategories: [
      {
        title: 'Answered Questions',
        ids: answeredIds
      },
      {
        title: 'Unanswered Questions',
        ids: unansweredIds
      },      
    ]
  };
}

export default connect(mapStateToProps)(Dashboard);
