import axios from 'axios';
const instanse = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        language:"ko-KR",
    },

    
});


export default instanse;