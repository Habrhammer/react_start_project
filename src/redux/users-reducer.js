import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_DISABLED = "TOGGLE_IS_DISABLED";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isDisabled: [],
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
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_DISABLED: {
      return {
        ...state,
        isDisabled: action.isDisabled
          ? [action.userId]
          : state.isDisabled.filter((id) => id !== action.userId),
      };
    }

    default: {
      return state;
    }
  }
}

export function followSuccess(userId) {
  return {
    type: FOLLOW,
    userId,
  };
}

export function unfollowSuccess(userId) {
  return {
    type: UNFOLLOW,
    userId,
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}
export function setCurrentPage(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
}
export function setTotalUsersCount(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
  };
}
export function toggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
}

export function toggleIsDisabled(isDisabled, userId) {
  return {
    type: TOGGLE_IS_DISABLED,
    isDisabled,
    userId,
  };
}

export const requestUsers = (page, pageSize) => {
  return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(page));

      let data = await usersAPI.getUsers(page, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsDisabled(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode == 0) {
      dispatch(actionCreator(userId));
  }
  dispatch(toggleIsDisabled(false, userId));
}

export const follow = (userId) => {
  return async (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
  }
}
export const unfollow = (userId) => {
  return async (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
  }
}