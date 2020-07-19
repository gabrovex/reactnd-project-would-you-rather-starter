import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import Dashboard from './Dashboard'
import Question from './Question'
import LeaderBoard from './LeaderBoard'
import Page404 from './Page404'
import QuestionCreate from './QuestionCreate'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <main>
            {!this.props.isAuthed ? (
              <Route path="/" component={Login} />
            ) : (
              <Fragment>
                <Nav />
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/questions/:id" exact component={Question} />
                  <Route path="/leaderboard" exact component={LeaderBoard} />
                  <Route path="/add" exact component={QuestionCreate} />
                  <Route component={Page404} />
                </Switch>
              </Fragment>
            )}
          </main>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    isAuthed: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);