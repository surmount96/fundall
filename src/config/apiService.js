import apiInstance from "./apiInstance";

class ApiService {

    async register(payload){
        return await apiInstance.post('register',payload);
    }
}

const instance = new ApiService;
export default instance;