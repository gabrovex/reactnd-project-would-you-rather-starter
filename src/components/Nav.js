import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setUser } from '../actions/authedUser';

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setUser());
  };

  render() {
    const { authedUser } = this.props;

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact >Home</NavLink>
          </li>
          <li>
            <NavLink to='/add' >New</NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' >Leaderboard</NavLink>
          </li>
        </ul>
        <span>Hi, {authedUser} <button onClick={this.handleLogout}>logout</button></span>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(Nav);
