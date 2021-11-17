import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "c6549b65-1a3d-4837-879f-59ac1d688750",
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
