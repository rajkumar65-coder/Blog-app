import axios from 'axios';

export default axios.create({
    //Update this when i rerun tunnel from terminal or After the time of expire in the terminal
    baseURL: 'http://96e6-2405-201-200c-e88f-f0a8-16dc-b11-7e3d.ngrok.io' 
});