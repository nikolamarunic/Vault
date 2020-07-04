import axios from "axios";

const api = {

    async handleLogin(data) {
        // console.log(data);
        let token;
        await axios
            .post("http://localhost:8000/api/auth/login", data)
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
            .get("http://localhost:8000/api/items/", {
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

    handleSubmit(item, token) {
        if (item.id) {
            axios
            .put(`http://localhost:8000/api/items/${item.id}/`, item, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Token ${token}`
                },
              })
              .then(res =>console.log('successfully put data'))
              .catch(err => {
                console.log(err);
              });
              return;
          } 
          axios
            .post(`http://localhost:8000/api/items/${item.id}/`, item, {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Token ${token}`
                },
              })
              .then(res => console.log('successfully posted data'))
              .catch(err => {
                console.log(err);
              });
    }

}
export default api