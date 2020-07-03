import axios from "axios";

const api = {

    async handleLogin(data){
        console.log(data);
        let token;
        await axios
            .post("http://localhost:8000/api/auth/login", data)
            .then(res => {
                console.log(res.data.token);
                token = res.data.token;
            })
            .catch((e) => {
                console.log('an error occurred')
                token = "";
            });
        return token;
    }
}
export default api