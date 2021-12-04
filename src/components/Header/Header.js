import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import TokenService from '../../token-service';

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  };

  renderLogoutLink() {
    return (
      <>
        <Link className='logout' onClick={this.handleLogoutClick} to='/'>
          <li>Logout</li>
        </Link>
      </>
    );
  }

  renderLoginLink() {
    return (
      <>
        <Link className='signUp' to='/signUp'>
          <li>Sign up</li>
        </Link>
        <Link className='login' to='/login'>
          <li>Login</li>
        </Link>
      </>
    );
  }

  renderUserTasks() {
    return (
      <>
        <Link className='logo' to='/taskList'>
          <li>Uforia</li>
        </Link>
      </>
    );
  }

  renderLandingPage() {
    return (
      <>
        <Link className='logo' to='/'>
          <li>Uforia</li>
        </Link>
      </>
    );
  }

  render() {
    return (
      <nav className='headerMain'>
        <ul>
          {TokenService.hasAuthToken()
            ? this.renderUserTasks()
            : this.renderLandingPage()}
          {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
        </ul>
      </nav>
    );
  }
}

export default Nav;
