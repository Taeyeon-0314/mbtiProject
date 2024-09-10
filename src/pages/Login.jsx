import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth"; // 로그인 API
import useUserStore from "../zustand/basesStore";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  // 로그인 처리 함수
  const handleLogin = async (formData) => {
    try {
      const user = await login(formData);
      // console.log("Login => ", user);
      if (user.success) {
        setUser(user);
        alert("로그인 되었습니다.");
        navigate("/");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      console.log(error);
    }
  };

  return (
    <div>
      <AuthForm mode="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
