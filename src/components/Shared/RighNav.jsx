import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "./Qzone";
import bg from "../../assets/bg.png";
import { AuthContext } from "../AuthProviders/AuthProviders";

const RighNav = () => {
  const { googleSignIn, setUser, githubSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="mb-3">
        <h5>Login With</h5>
        <Button
          variant="outline-primary"
          className="mb-2 w-100"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle className="me-2" /> Login With Google
        </Button>
        <Button
          variant="outline-secondary"
          className="mb-2 w-100"
          onClick={handleGithubSignIn}
        >
          <FaGithub className="me-2" /> Login With Github
        </Button>
      </div>
      <div>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone />

      <div className="position-relative mt-4">
        <img src={bg} alt="" className="position-absolute top-50" />
        <div className="position-absolute top-50 mt-5 text-white text-center p-3">
          <h3 className="mt-5 mb-3">Create an Amazing Newspaper</h3>
          <p className="my-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </>
  );
};

export default RighNav;
