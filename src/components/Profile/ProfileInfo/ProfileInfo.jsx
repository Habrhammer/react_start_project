import React from "react";
import classes from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div>
       <div className={classes.image_wrapper}>
         <img
           className={classes.img}
           src="https://image.winudf.com/v2/image/Y29tLmZydWl0d2FsbHBhcGVyLmhkLmZydWl0cGljdHVyZXMucGhvdG9zLmJhY2tncm91bmQuY3V0ZS5jb29sLmFydC5mcnVpdGltYWdlcy5oZC5mcmVlX3NjcmVlbl8wXzE1MzIwODEwMzdfMDY0/screen-0.jpg?fakeurl=1&type=.jpg"
           alt=""
         />
       </div>
       <div>ava+description</div>
    </div>
  );
}

export default ProfileInfo;
