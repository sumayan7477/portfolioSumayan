import axios from "axios";

const axoisPublic = axios.create({
    baseURL:'https://infolio-port-server.vercel.app'
})
const Useaxios = () => {
    return axoisPublic;
};

export default Useaxios;