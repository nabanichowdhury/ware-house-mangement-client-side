import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useHref, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";

import Register from "../Register/Register";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // Sign In Using Google
  const [signInWithGoogle, userGoole, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  // Sign in using email and Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // sign in using Facebook
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);
  // Handle submit button with email
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  // Handle google login
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handFacebookLogin = () => {
    signInWithFacebook();
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  // error display
  let errorElement;
  if (error || errorFacebook || errorGoogle) {
    errorElement = (
      <div>
        <p className="">
          Error:{error?.message}
          {errorFacebook?.message}
          {errorGoogle?.message}
        </p>
      </div>
    );
  }
  // reset password
  const [sendPasswordResetEmail, sending, error3] =
    useSendPasswordResetEmail(auth);
  const resetPassword = async (event) => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sending email");
  };
  // Loading
  if (loadingGoogle || loading || loadingFacebook || sending) {
    return <Loading></Loading>;
  }

  return (
    <div className="text-dark w-50 mx-auto container">
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            ref={emailRef}
            type="email"
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
            ref={passwordRef}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="text-danger">{errorElement}</div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      <p>
        Have not registered yet?
        <Link to="/register" element={<Register></Register>}>
          Register Now{" "}
        </Link>
      </p>
      <p>
        Forgot Password?
        <button onClick={resetPassword} className="btn btn-primary">
          Reset Password
        </button>
      </p>

      <button
        onClick={handleGoogleLogin}
        type="submit"
        class="btn btn-primary w-100 my-3"
      >
        <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" />{" "}
        Sign In Using Google
      </button>
      <button
        onClick={handFacebookLogin}
        type="submit"
        class="btn btn-primary w-100 mb-5"
      >
        <img src="https://img.icons8.com/office/40/000000/facebook-new.png" />
        Sign In Using FaceBook
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
