import axios from "axios";

const api = {

    async handleLogin(data) {
        // console.log(data);
        let token;
        await axios
            .post("/api/auth/login", data)
            .then(res => {
                // console.log(res);
                token = res.data.token;
            })
            .catch((e) => {
                console.log('an error occurred')
                token = "";
            });
        return token;
    },
    async handleSignUp(data) {
        // console.log(data);
        let token;
        await axios
            .post("/api/auth/register", data)
            .then(res => {
                // console.log(res);
                token = res.data.token;
            })
            .catch((e) => {
                console.log('an error occurred')
                token = "";
            });
        return token;
    },

    async refreshList(token) {
        let data;
        await axios
            .get("/api/items/", {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                },
            })
            .then(res => data = res.data)
            .catch(err => {
                console.log(err);
                data = [];
            });
        // console.log(data);
        return data ? data : []; //Return empty array if nothing found.
    },

    async handleSubmit(item, token) {
        if (item.id) {//If it has an ID then want to UPDATE
            await axios
                .put(`/api/items/${item.id}/`, item, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`
                    },
                })
                .then(res => console.log('successfully put data'))
                .catch(err => {
                    console.log(err);
                });
            return;
        }
        //else want to CREATE
        //URL used to be http://localhost:8000/api/items/${item.id}` but didnt work?
        await axios
            .post(`/api/items/`, item, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                },
            })
            .then(res => console.log('successfully posted data'))
            .catch(err => {
                console.log(err);
            });
    },

    async handleDelete(item, token) {
        await axios
            .delete(`/api/items/${item.id}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                },
            })
            .then(res => console.log('successfully deleted data'))
            .catch(err => {
                console.log(err);
            });
    }

}
export default api