import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-deb49.firebaseio.com/'
});

export default instance;