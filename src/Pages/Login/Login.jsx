import { useEffect, useRef, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import authenticationImg from "../../assets/others/authentication21.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
