import axios from "axios";

const api = {

    async handleLogin(data){
        console.log(data);
        let token;
        await axios
            .post("http://localhost:8000/api/auth/login", data)
            .then(res => {
                console.log(res);
                token = res.data.token;
            })
            .catch((e) => {
                console.log('an error occurred')
                token = "";
            });
        return token;
    },

    // refreshList = (token) => {
    //     axios
    //       .get("http://localhost:8000/api/items/", token)
    //       .then(res => this.setState({ vaultItems: res.data }))
    //       .catch(err => console.log(err));
    //   }
}
export default api