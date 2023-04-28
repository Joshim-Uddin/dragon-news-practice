import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProviders";

const SignUpUser = () => {
  const { signUpUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const checkbox = form.checkbox.checked;
    if (checkbox) {
      signUpUser(email, password)
        .then((result) => result.user)
        .catch((error) => console.log(error));
    } else {
      alert("Accept the Codition");
    }
  };
  return (
    <Container>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="signup mx-auto my-2 bg-light p-3"
      >
        <h3 className="text-center my-3">Register Your Account</h3>
        <div className="text-left">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="me-2"
          />
          <label htmlFor="checkbox" className="form-label">
            Accept Term & Conditions
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-100">
            Register
          </button>
        </div>
      </form>
    </Container>
  );
};

export default SignUpUser;
