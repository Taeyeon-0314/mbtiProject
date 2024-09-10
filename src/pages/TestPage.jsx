import TestForm from "../components/TestForm";

import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import calculateMBTI from "../utils/mbtiCalculator";
import useUserStore from "../zustand/basesStore";

const Test = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.userId,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };

  return (
    <div className="max-w-lg mx-auto mt-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        MBTI 테스트
      </h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
