import axios from "axios";

class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV === "production" ? "/" : "http://localhost:8080";
        // this.headers = {"Content-Type": "application/json"};
        axios.defaults.withCredentials=true
        this.timeout = 3000;
    }

    setInterceptors(instance, url){
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = "llj";
            return config;
        });
        instance.interceptors.response.use((response) => {
            return response.data;
        });
    }

    merge(options){
        return {...options, baseURL: this.baseURL, timeout: this.timeout};
    }

    request(options){
        let instance = axios.create();
        this.setInterceptors(instance, options.url);
        let config = this.merge(options);
        // console.log(config)
        return instance(config);
    }
}

export default new AjaxRequest;