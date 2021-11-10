const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      userPhoto:
        "https://images.generated.photos/v3jAPcfcFxK9rxxvU15qu7Na7zHwlzIMoBsD_vELoe8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY1NTE0LmpwZw.jpg",
      followed: true,
      fullName: "Bruce",
      status: "Lorem ipsum dolor sit amet.",
      location: { city: "Gomel", country: "Belarus" },
    },
    {
      id: 2,
      userPhoto:
      "https://images.generated.photos/REFe5-foHQv2xx1RBHm9JqaoRoNHraztJAQFEuWNCLQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzIwNDc4LmpwZw.jpg",
      fullName: "Till",
      followed: false,
      status:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi.",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      userPhoto:
      "https://images.generated.photos/jXaLZ4jYdkt9VpRz68QLqZoLJYC-NnabulDXM-YHVlk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAxMjI5LmpwZw.jpg",
      fullName: "Rick",
      followed: true,
      status: "Lorem, ipsum dolor.",
      location: { city: "Kiev", country: "Ukraine" },
    },
  ],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
      
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    default: {
      return state;
    }
  }
}

export function followAC(userId) {
  return {
    type: FOLLOW,
    userId,
  };
}

export function unfollowAC(userId) {
  return {
    type: UNFOLLOW,
    userId,
  };
}

export function setUsersAC(users) {
  return {
    type: SET_USERS,
    users,
  };
}
