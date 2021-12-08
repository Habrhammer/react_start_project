import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    /* for Fred */
    "API-KEY": "1cd170be-dd79-4dae-bcfd-ad4b8a3bfafd",
    /*  for Ragnar */
    // "API-KEY": "4a06c3f2-eb90-454d-bb47-76d0c90aa4d5",
    /* for Ted */
    // "API-KEY": "52dc9927-38c6-41b9-88a2-c67e34ff2563",
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
    console.warn(
      "Method usersAPI.getProfile() is deprecated! Use profileAPI.getProfile()"
    );
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile );
}

};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const dialogsAPI = {
  getDialogs() {
    return instance.get(`dialogs`);
  },
  getListMessages(userId) {
    return instance.get(`dialogs/${userId}/messages`);
  },
  sendMessage(userId, body) {
    return instance.post(`dialogs/${userId}/messages`, { body: body });
  },
};

export const securityAPI = {
  getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`);
  }
}