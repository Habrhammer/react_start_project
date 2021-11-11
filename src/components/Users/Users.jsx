import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => {
          return (
            <div className={classes.wrapper} key={u.id}>
              <div className={classes.content}>
                <div className={classes.left_container}>
                  <div>
                    <img
                      src={u.userPhoto ? u.userPhoto : userPhoto}
                      alt=""
                      className={classes.userPhoto}
                    />
                  </div>
                  <div>
                    {u.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(u.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(u.id);
                        }}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
                <div className={classes.middle_container}>
                  <div className={classes.fullName}>{u.name}</div>
                  <div>{u.status}</div>
                </div>
                <div className={classes.right_container}>
                  {/* <div>{u.location.country}</div>
                  <div>{u.location.city}</div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
