import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-3855d.firebaseio.com/",

});

instance.defaults.headers['Access-Control-Allow-Origin'] ='*';

export default instance;
