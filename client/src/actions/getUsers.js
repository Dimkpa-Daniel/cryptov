import axios from "axios";


axios.defaults.baseURL = "https://oyster-app-hahsr.ondigitalocean.app/";


export const getUsers = () => {
    axios.get("api/users/fetchusers")
        // .then(response => console.log(response))
        .then((response) => {
            const allRegistered = response.data
        })
};


