import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';


const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);

  // navigate to homepage or spacifing page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("Account creation Successful!");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="max-w-md bg-white shadow mx-auto flex items-center justify-center p-4 my-10 rounded-3xl">
      <div className="modal-action flex flex-col justify-center -mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg">Create a Account!</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <input type="submit" value="Signup" className="btn bg-orange" />
          </div>

          <p className="text-center my-1">
            Have an Account?{" "}
            <button
              className="text-orange underline ml-1"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>
            <Modal />
          </p>

          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>

        {/* Social Sign in */}
        <div className="text-center space-x-4 -mt-5">
          <button className="btn btn-circle hover:bg-orange hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-orange hover:text-white">
            <FaFacebook />
          </button>
          <button className="btn btn-circle hover:bg-orange hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
