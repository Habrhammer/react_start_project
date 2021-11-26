import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "4a06c3f2-eb90-454d-bb47-76d0c90aa4d5",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn("Method usersAPI.getProfile() is deprecated! Use profileAPI.getProfile()")
    return profileAPI.getProfile(userId)
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`,{status:status})
  }
}

export const authAPI = {
  me() {
      return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
      return instance.delete(`auth/login`);
  }
}
