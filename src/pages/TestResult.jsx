import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTestResults,
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";
import TestResultList from "../components/TestResultList";
import useUserStore from "../zustand/basesStore";

const TestResult = () => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();

  // Test 결과 데이터를 가져오는 쿼리
  const {
    data: results = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  // 삭제하는 mutation
  const deleteMutation = useMutation({
    mutationFn: deleteTestResult,
    onMutate: async (id) => {
      await queryClient.cancelQueries(["testResults"]);
      const previousResults = queryClient.getQueryData(["testResults"]);
      queryClient.setQueryData(["testResults"], (old) =>
        old.filter((result) => result.id !== id)
      );
      return { previousResults };
    },
  });

  // visibility 업데이트하는 mutation
  const updateVisibilityMutation = useMutation({
    mutationFn: updateTestResultVisibility,
    onMutate: async ({ id, visibility }) => {
      await queryClient.cancelQueries(["testResults"]);
      const previousResults = queryClient.getQueryData(["testResults"]);

      // 낙관적 업데이트
      queryClient.setQueryData(["testResults"], (old) =>
        old.map((result) =>
          result.id === id ? { ...result, visibility } : result
        )
      );
      return { previousResults };
    },
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onDelete={(id) => deleteMutation.mutate(id)} // 삭제 mutation
          onUpdate={(id, visibility) => {
            // console.log("onUpdate:", id, visibility);
            updateVisibilityMutation.mutate({ id, visibility }); // visibility 업데이트 mutation
          }}
        />
      </div>
    </div>
  );
};

export default TestResult;
