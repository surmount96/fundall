import apiInstance from "./apiInstance";

class ApiService {

    async register(payload){
        return await apiInstance.post('register',payload);
    }
    async login(payload){
        return await apiInstance.post('login',payload);
    }

    async user(payload){
        return await apiInstance.get('base/profile',payload);
    }
}

const instance = new ApiService;
export default instance;