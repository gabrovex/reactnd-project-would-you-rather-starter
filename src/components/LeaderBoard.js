import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserScore } from '../utils/helpers';

class LeaderBoard extends Component {
  render() {
    const { usersScore } = this.props;

    return (
      <div>
        {usersScore.map((userScore) =>
            <div>
							<img src={userScore.avatarURL} alt={userScore.name} width="50" />
			        <div>Answered Questions: {userScore.answerCount}</div>
							<div>Created Questions: {userScore.questionCount}</div>
							<div>Score: {userScore.totalScore}</div>
          </div>					
     )}
    </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
	const usersScore = Object.values(users)
		.map((user) => (getUserScore(user)))
		.sort((a, b) => b.totalScore - a.totalScore);

	return {
		usersScore
	};
};

export default connect(mapStateToProps)(LeaderBoard);
