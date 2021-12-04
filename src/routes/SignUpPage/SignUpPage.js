import React from "react";
import "./SignUpPage.scss";
import Context from "../../Context";

class SignUpPage extends React.Component {
  static contextType = Context;

  state = { error: null };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password, phone_number } = ev.target;

    this.setState({ error: null });
    this.context
      .postUser({
        username: username.value,
        password: password.value,
        phone_number: phone_number.value,
      })
      .then((user) => {
        username.value = "";
        password.value = "";
        phone_number.value = "";
        this.handleRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <main className="signUpMain loginMain">
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <h1>Sign up</h1>

          <div className="inputContainer">
            <div className="username">
              <label htmlFor="username">Username:</label>
              <input name="username" type="text" id="username" required />
            </div>

            <div role="alert">
              {this.state.error &&
                this.state.error.toLowerCase().includes("username") && (
                  <p className="red">{this.state.error}</p>
                )}
            </div>

            <div className="password">
              <label htmlFor="password">Password:</label>
              <input name="password" type="password" id="password" required />
            </div>

            <div role="alert">
              {this.state.error &&
                this.state.error.toLowerCase().includes("password") && (
                  <p className="red">{this.state.error}</p>
                )}
            </div>

            <div className="phone">
              <label htmlFor="phone_number">Phone #:</label>
              <input name="phone" type="tel" id="phone_number" required />
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

export default SignUpPage;
