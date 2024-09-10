import axios from "axios";


const testAPIInstance = axios.create({
    baseURL: 'https://strong-caramel-yarn.glitch.me',  // API 기본 URL 설정
});

export default testAPIInstance;  // axios 인스턴스를 export