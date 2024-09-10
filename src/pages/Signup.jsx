import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth"; // 회원가입 API

const Signup = () => {
  const navigate = useNavigate();

  // 회원가입 처리 함수
  const handleSignup = async (formData) => {
    // console.log(formData);
    try {
      await register(formData); // API 호출
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.log(error);
    }
  };

  return (
    <div>
      <AuthForm mode="signup" onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;
