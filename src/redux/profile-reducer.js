import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi hic laboriosam earum sunt quibusdam eligendi vel mollitia, officia laudantium sed in maiores esse? Quod, minima reiciendis? Fugiat, voluptatum praesentium.",
      likes: 1,
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi porro praesentium pariatur illum consequuntur, in molestiae laborum iure atque accusantium debitis amet numquam voluptates ea libero ex vel ratione sed consectetur quod? Culpa soluta aut est ex placeat nisi, reprehenderit sequi quis doloribus asperiores. Ipsam pariatur incidunt ratione repudiandae.",
      likes: 3,
    },
    {
      id: 3,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sed vitae magni eum molestiae ratione!",
      likes: 5,
    },
  ],
  
  profile: null,
  status: "",
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: Date.now(),
            message: action.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: "",
      };
    }

 
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
}

export function addPostActionCreator(newPostText) {
  return {
    type: ADD_POST,
    newPostText
  };
}

export function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
}


export function setStatus(status) {
  return {
    type: SET_STATUS,
    status: status,
  };
}

export function getStatus(userId) {
  return (dispatch) => {
    return profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
}

export function updateStatus(status){
  return (dispatch)=>{
    return profileAPI.updateStatus(status).then((response)=>{
      if(response.data.resultCode === 0){
        dispatch(setStatus(status))
      }
    })
  }
}


export function getUserProfile(userId) {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
}
