import testAPIInstance from './testAPIInstance';

// Test 결과 가져오기
export const getTestResults = async () => {
    const response = await testAPIInstance.get("/testResults");
    return response.data;
};

// Test 결과 생성하기
export const createTestResult = async (resultData) => {
    const response = await testAPIInstance.post("/testResults", resultData);
    return response.data;
};

// Test 결과 삭제하기
export const deleteTestResult = async (id) => {
    // console.log("deleteTestResult => ", id);
    const response = await testAPIInstance.delete(`/testResults/${id}`);
    return response.data;
};

// Test 결과 visibility 업데이트하기
export const updateTestResultVisibility = async (id, visibility) => {
    console.log("updateTestResultVisibility => ", id, visibility);
    const response = await testAPIInstance.patch(`/testResults/${id}`, { visibility });
    return response.data;
};