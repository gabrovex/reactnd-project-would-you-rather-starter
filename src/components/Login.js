import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/authedUser';

class Login extends Component {
  handleChangeUser = (e) => {
    const selectedUser = e.target.value;
    this.props.dispatch(setUser(selectedUser));
  };

  render() {
    const { users } = this.props;

    return (
      <select onChange={this.handleChangeUser}>
        <option value="">Select a user</option>
        {Object.values(users).map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login);
