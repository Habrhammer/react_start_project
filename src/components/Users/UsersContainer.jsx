import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
  };
}

function mapDispathToProps(dispatch) {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Users);
