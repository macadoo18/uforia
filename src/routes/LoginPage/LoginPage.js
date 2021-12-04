import React from "react";
import Context from "../../Context";
import TokenService from "../../token-service";

export default class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
    handleLoginSuccess: () => {},
  };

  static contextType = Context;

  state = { error: null };

  handleLoginSuccess = () => {
    if (TokenService.getAuthToken()) {
      this.context.getUserInfo(() => {
        this.context.getUserTasks(() => {
          this.props.history.push(`/taskList`);
        });
      });
    }
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;

    this.context
      .login({
        username: username.value,
        password: password.value,
      })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <main className="loginMain signUpMain">
        <form
          className="signUpForm loginForm"
          onSubmit={this.handleSubmitJwtAuth}
        >
          <h1>Login</h1>

          {this.state.error && <p className="red">{this.state.error}</p>}

          <div className="inputContainer">
            <div className="username">
              <label htmlFor="username">Username:</label>
              <input name="username" id="username" />
            </div>

            <div className="password">
              <label htmlFor="password">Password:</label>
              <input name="password" id="password" type="password" />
            </div>
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </main>
    );
  }
}
