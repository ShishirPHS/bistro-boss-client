import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          Swal.fire({
            text: "Login Successful",
            icon: "success",
          });
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <button onClick={handleGoogleLogin} className="btn btn-outline">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
