import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Login from "../Login/Login";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const Register = () => {
  // Sign Up using Email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [agree, setAgree] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Updated profile");
    navigate("/home");
  };
  // error display
  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="">
          Error:{error?.message}
          {error1?.message}
        </p>
      </div>
    );
  }

  // Loading...
  if (loading || updating) {
    return <Loading></Loading>;
  }

  return (
    <div className="text-light w-50 mx-auto container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
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
            required
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
            required
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            name="terms"
            onClick={() => setAgree(!agree)}
          />
          <label
            class="form-check-label"
            for="exampleCheck1"
            className={agree ? "text-primary" : "text-danger"}
          >
            Accept all the terms and condition
          </label>
        </div>

        <div className="text-danger">{errorElement}</div>

        <button disabled={!agree} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        Already have an account?
        {user ? (
          <button>Sign Out</button>
        ) : (
          <Link to="/login" element={<Login></Login>}>
            Login Here{" "}
          </Link>
        )}
      </p>
    </div>
  );
};

export default Register;
