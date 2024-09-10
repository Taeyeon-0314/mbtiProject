import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: mode === "signup" ? "" : undefined, // 회원가입 시에만 nickname 사용
  });

  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleModeSwitch = () => {
    navigate(mode === "login" ? "/signup" : "/login");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <h1 className="text-4xl text-center font-bold mb-6">
        {mode === "login" ? "로그인" : "회원가입"}
      </h1>

      <div className="mb-4">
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {mode === "signup" && (
        <div className="mb-4">
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-red-400 text-white font-bold py-3 px-4 rounded-md hover:bg-red-600 transition duration-300"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>

      {mode === "login" ? (
        <div className="mt-4 flex items-center justify-center">
          <p className="text-gray-600">계정이 없으신가요?</p>
          <button
            type="button"
            onClick={handleModeSwitch}
            className="ml-2 text-red-500 hover:underline focus:outline-none"
          >
            회원가입
          </button>
        </div>
      ) : (
        <div className="mt-4 flex items-center justify-center">
          <p className="text-gray-600">이미 계정이 있으신가요?</p>
          <button
            type="button"
            onClick={handleModeSwitch}
            className="ml-2 text-red-500 hover:underline focus:outline-none"
          >
            로그인
          </button>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
