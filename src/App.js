import React, { Component } from "react";
import Employee from "./Employee";
import swal from "sweetalert";

class App extends Component {
  state = {
    email: "",
    password: "",
    renderEmployee: false,
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    if (email === "admin@admin.com" && password === "123456") {
      swal("Logged in Successfully");
      this.setState({
        renderEmployee: true,
        email: "",
        password: "",
      });
    } else {
      swal("Something went wrong!");
      this.setState({
        email: "",
        password: "",
      });
    }
  };

  handleLogOut = () => {
    this.setState({
      renderEmployee: false,
    });
  };

  render() {
    const { renderEmployee } = this.state;
    return (
      <>
        {renderEmployee ? (
          <Employee handleLogOut={this.handleLogOut} />
        ) : (
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              left: "50%",
              top: "40%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#ddd",
              padding: "50px",
            }}
          >
            <div>
              <h2 style={{ position: "relative", top: -25, color: "#1b2430" }}>
                Login Form
              </h2>
            </div>

            <input
              style={{ padding: "10px 30px" }}
              type="text"
              placeholder="Enter Email Address . . ."
              name="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <br />
            <br />
            <input
              style={{ padding: "10px 30px" }}
              type="password"
              placeholder="Enter Password . . ."
              name="password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <br />
            <br />
            <button
              onClick={this.handleSubmit}
              style={{
                padding: "10px 100px",
                backgroundColor: "#1b2430",
                color: "#fff",
              }}
            >
              Login
            </button>
          </div>
        )}
      </>
    );
  }
}

export default App;
