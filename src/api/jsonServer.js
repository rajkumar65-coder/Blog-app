import axios from 'axios';

export default axios.create({
    //Update this when i rerun tunnel from terminal or After the time of expire in the terminal
    baseURL: 'http://a40c-2405-201-200c-e27a-9c8f-71ec-4bab-e996.ngrok.io' 
});