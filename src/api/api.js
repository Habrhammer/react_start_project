import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1cd170be-dd79-4dae-bcfd-ad4b8a3bfafd",
  },
});



export const usersAPI = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then((response)=>{
          return response.data;
       })
    }
}
