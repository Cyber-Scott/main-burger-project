import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-66acb-default-rtdb.firebaseio.com/'
});

export default instance;