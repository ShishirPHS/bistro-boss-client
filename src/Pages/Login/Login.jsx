import { useContext, useEffect, useRef, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import authenticationImg from "../../assets/others/authentication21.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          text: "Login Successful",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "Email or Password is incorrect!",
          icon: "error",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();

    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${loginBg})` }}
        className="hero min-h-screen"
      >
        <div className="container mx-auto flex justify-center py-20">
          <div
            style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
            className="hero-content flex-col lg:flex-row py-14 px-28"
          >
            <div className="text-center lg:text-left">
              <img src={authenticationImg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <p className="font-bold text-center text-xl pt-6">
                Please Login!
              </p>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    ref={captchaRef}
                    placeholder="type the captcha above"
                    name="captcha"
                    className="input input-bordered"
                    required
                  />
                  <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-sm mt-2 btn-outline"
                  >
                    Validate
                  </button>
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disabled}
                    className="btn btn-primary"
                    type="submit"
                    value="Sign In"
                  />
                </div>
              </form>
              <p className="mb-5 ml-8 -mt-3">
                <small>
                  New Here?{" "}
                  <Link
                    to="/signUp"
                    className="font-semibold text-blue-600 hover:font-bold"
                  >
                    Create an account
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

export default Login;
