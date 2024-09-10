import axios from "axios";


const authAPIInstance = axios.create({
    baseURL: 'https://moneyfulpublicpolicy.co.kr',  // API 기본 URL 설정
});

export default authAPIInstance;  // axios 인스턴스를 export