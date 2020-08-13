import axios from 'axios';

const instance = axios.create({
        baseURL:'https://fusion-empire.firebaseio.com/'
});

export default instance;
