import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  newPostText: "bla bla bla...",
  profile: null,
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
            message: state.newPostText,
            likesCount: 0,
          },
        ],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    default:
      return state;
  }
}

export function addPostActionCreator() {
  return {
    type: ADD_POST,
  };
}

export function setUserProfile(profile) {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
}

export function updateNewPostTextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
}

export function getUserProfile(userId) {
  return (dispatch) => {
   
    
    // let userId = this.props.match.params.userId;
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
}
