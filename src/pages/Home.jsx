import { useNavigate } from "react-router-dom";
import useUserStore from "../zustand/basesStore";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleTestClick = () => {
    if (!user) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    } else {
      navigate("/test");
    }
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-center text-5xl font-bold mb-8">
          무료 성격 테스트
        </h1>
        <p className="text-center mb-12">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              성격 유형 검사
            </h2>
            <p>
              자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을
              미치는지 알아보세요.
            </p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">
              성격 유형 이해
            </h2>
            <p>
              다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
            </p>
          </div>
          <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">팀 평가</h2>
            <p>
              팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
              찾아보세요.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6 text-center">
        <button
          className="rounded-full border-zinc-700 bg-lime-300 text-2xl px-8 py-4 hover:bg-lime-400 transition-all duration-300 shadow-lg"
          onClick={handleTestClick}
        >
          내 MBTI 알아보러 가기
        </button>
      </div>
    </>
  );
};

export default Home;
