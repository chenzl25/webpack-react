import React from 'react'
// import Store from '../stores/Store'
import { Router, Route, Link } from 'react-router'
import RouteCSSTransitionGroup from './RouteCSSTransitionGroup.react'
import '../../styles/main.scss'
import StaticContainer from 'react-static-container'
import Store from '../stores/Store'




const App = React.createClass({
  getInitialState() {
    return {
      isLogin: false
    };
  },
  componentDidMount(){
    Store.addChangeListener(this.isLogin);
  },
  componentWillUnmount(){
    Store.removeChangeListener(this.isLogin);
  },
  render() {
    var AppTopButtons;
    if (this.state.isLogin !== true) {
      AppTopButtons = (<ul className="app-top-buttons">
                        <li><Link className="register" to="/register">Register</Link></li>
                        <li><Link className="login" to="/login">Login</Link></li>
                      </ul>);
    }
    return (
      <div className="app-wrap">
        <h1 className="app-name">ClassManager</h1>
        {AppTopButtons}
        <RouteCSSTransitionGroup transitionName="base" transitionAppear={false} transitionLeave={false} transitionEnter={false} transitionAppearTimeout={0} transitionEnterTimeout={0}  >
          {this.props.children&&React.cloneElement(this.props.children, {data: this.props.data})}
        </RouteCSSTransitionGroup>
      </div>
    )
  },
  isLogin()  {
    this.setState({isLogin: Store.isLogin()});
  },
})
export default App;
