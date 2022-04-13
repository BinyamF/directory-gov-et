import axios from "axios";

const url = "http://localhost:5000";

export const fetchPosts = () => axios.get(url + "/posts");
export const fetchOrganizations = () => axios.get(url + "/organizations");
export const fetchOfficials = () => axios.get(url + "/officials");
export const createPost = (newPost) => axios.post(url + "/posts", newPost);
export const createOrganization = (newOrganization) => axios.post(url+"/posts", newOrganization);
export const createOfficials =(newOfficial)=> axios.post(url+"/officials", newOfficial);
