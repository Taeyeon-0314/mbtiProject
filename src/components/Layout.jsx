import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/basesStore";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { user, logout } = useUserStore((state) => ({
    user: state.user,
    logout: state.logout,
  }));

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };
  const handleTest = () => {
    navigate("/test");
  };

  const handleTestResult = () => {
    navigate("/results");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">
            홈
          </Link>
          <div className="space-x-4">
            {user ? (
              <>
                <button
                  onClick={handleProfile}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  프로필
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                  onClick={handleTest}
                >
                  테스트
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  onClick={handleTestResult}
                >
                  결과보기
                </button>
                <button
                  className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-grow pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
