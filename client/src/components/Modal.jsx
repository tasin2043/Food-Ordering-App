import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';

const Modal = () => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  // navigate to homepage or spacifing page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);

    login(email, password).then((result) => {
      const user = result.user;
      alert("Login Successful!");
      document.getElementById("my_modal_5").close()
      navigate(from, {replace:true})
    }).catch((error) => {
      const errorMessage = error.message;
      setErrorMessage("Provide a correct email and password!")
    })  
  };

  // google signin
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      alert("Login Successfull!")
    }).catch((error) => console.log(error))
  }

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Please Login!</h3>
          <div className="modal-action flex flex-col justify-center -mt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
              method="dialog"
            >
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

              {/* error */}
              {
                errorMessage ? <p className='text-red text-xs italic'>{errorMessage}</p> : ""
              }

              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn bg-orange" />
              </div>

              <p className="text-center my-1">
                Don't have an account?{" "}
                <Link to="/signup" className="text-orange underline ml-1">
                  Signup Now
                </Link>
              </p>

              <button
                htmlFor="my-modal-5"
                onClick={() =>
                  document.getElementById("my_modal_5").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            {/* Social Sign in */}
            <div className="text-center space-x-4 -mt-5">
              <button className="btn btn-circle hover:bg-orange hover:text-white" onClick={handleLogin}>
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
      </dialog>
    </div>
  );
}

export default Modal;
