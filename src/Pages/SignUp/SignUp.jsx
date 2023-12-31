import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import authenticationImg from "../../assets/others/authentication21.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user info updated");
                Swal.fire({
                  text: "Sign Up Successful",
                  icon: "success",
                });
                reset();
                navigate("/");
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sing Up</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${loginBg})` }}
        className="hero min-h-screen"
      >
        <div className="container mx-auto flex justify-center py-20">
          <div
            style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
            className="hero-content flex-col lg:flex-row-reverse py-14 px-28"
          >
            <div className="text-center lg:text-left">
              <img src={authenticationImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <p className="font-bold text-center text-xl pt-6">
                Please Sign Up!
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600 mt-[2px]">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    {...register("photoURL", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600 mt-[2px]">
                      Photo URL is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-[2px]">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                    })}
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600 mt-[2px]">
                      This field is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600 mt-[2px]">
                      Password must be 8 characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600 mt-[2px]">
                      Password cannot exceed 20 characters in length. Please
                      choose a shorter password.
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600 mt-[2px]">
                      Password must contain at least one lowercase letter, one
                      uppercase letter, one digit, and one special character.
                    </span>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <p className="mb-5 ml-8 -mt-3">
                <small>
                  Already Have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-blue-600 hover:font-bold"
                  >
                    Login
                  </Link>
                </small>
              </p>
              <div className="divider px-8"></div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
