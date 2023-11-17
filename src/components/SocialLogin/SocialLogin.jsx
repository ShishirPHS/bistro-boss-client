import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
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
