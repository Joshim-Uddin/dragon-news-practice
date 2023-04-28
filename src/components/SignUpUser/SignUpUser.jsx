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
    signUpUser(email, password)
      .then((result) => result.user)
      .catch((error) => console.log(error));
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
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              class="form-control"
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
          <label for="checkbox" class="form-label">
            Accept Term & Conditions
          </label>
        </div>
        <div className="text-center">
          <button type="submit" class="btn btn-dark w-100">
            Register
          </button>
        </div>
      </form>
    </Container>
  );
};

export default SignUpUser;
