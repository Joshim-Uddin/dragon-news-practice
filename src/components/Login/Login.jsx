import React, { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Link } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => result.user)
      .catch((error) => console.log(error));
    form.reset();
  };
  return (
    <Container>
      <Navbar />
      <form onSubmit={handleSubmit} className="login mx-auto my-2 bg-light p-3">
        <h3 className="text-center my-3">Login Your Account</h3>
        <div className="text-left">
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

        <div className="text-center">
          <button type="submit" class="w-100 btn btn-dark">
            Login
          </button>
        </div>
        <div className="mt-3">
          <p>
            Don't have An Account ?{" "}
            <Link to="/signup" className="text-decoration-none text-danger">
              Register
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
};

export default Login;
