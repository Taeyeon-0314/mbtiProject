import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, user, onUpdate, onDelete }) => {
  // console.log("result.userId => ", results);
  // console.log("user.id => ", user);
  // 날짜 순으로 정렬
  const sortedResults = results.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div className="space-y-4">
      {sortedResults
        .filter((result) => result.visibility || result.userId === user.userId)
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            // visibility 업데이트
            onUpdate={() => onUpdate(result.id, !result.visibility)}
            // 삭제
            onDelete={() => onDelete(result.id)}
          />
        ))}
    </div>
  );
};

export default TestResultList;
