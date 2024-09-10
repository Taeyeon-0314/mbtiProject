
import authAPIInstance from './authAPIInstance';

export const register = async (userData) => {
    const response = await authAPIInstance.post(`/register`, userData);
    // console.log(response);
    return response.data;
};

export const login = async (userData) => {
    // console.log("userData => ", userData);
    const response = await authAPIInstance.post('/login', userData);
    // console.log("response => ", response);
    return response.data;
};

export const getUserProfile = async (token) => {
    const response = await authAPIInstance.get('/user',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    // console.log("getUserProfile => ", response);
    return response.data;
};

export const updateProfile = async (token, formData) => {
    // console.log("token => ", token);
    // console.log("formData => ", formData);

    const response = await authAPIInstance.patch('/profile', {
        nickname: formData
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    // console.log("response => ", response);
    return response.data;
};