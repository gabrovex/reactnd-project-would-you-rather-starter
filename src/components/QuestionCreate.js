import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class QuestionCreate extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  };


	handleSetOption = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));
    this.props.history.push("/");
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="optionOne" placeholder="Option One" value={optionOne} onChange={this.handleSetOption} />
          or <input name="optionTwo" placeholder="Option Two" value={optionTwo} onChange={this.handleSetOption} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(QuestionCreate);
