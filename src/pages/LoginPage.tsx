import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInWithGoogle } from "../services/authService";

const LoginPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-[#0E0D0D] text-white">
      <h1 className="text-2xl mb-4">Sign In</h1>

      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
