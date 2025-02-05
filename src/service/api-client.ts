import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '089203aa3afa4a0d8f351e9208b028b7',
    }
})