import axios from 'axios'

// 
// const baseUrl = "http://localhost:4000/api/article";
const baseUrl = "https://back-groupomania.herokuapp.com/api/article";

export default {

    getArticles : (headers) => {
    return axios.get(baseUrl + "/", {headers})
    },

    postArticles : (data, headers) => {
        return axios.post(baseUrl + "/", data , {headers})
    },

    getOneArticle : (id, headers) => {
        return axios.get(baseUrl + "/" + id, {headers})
    },

    putArticle : (id, data, headers) => {
        return axios.put(baseUrl + "/" + id, data , {headers})
    },

    deleteArticle : (id, headers) => {
        return axios.delete(baseUrl + "/" + id, {headers})
    },

    likeArticle : (id, headers) => {
        return axios.post("https://back-groupomania.herokuapp.com/api/like/article/" + id, {} , {headers})
    }

}