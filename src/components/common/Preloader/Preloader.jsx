import React from "react";
import preloader from "./../../../assets/images/preloader.svg";
import classes from "./Preloader.module.css"

function Preloader(props) {
  return (

  <div className={classes.wrapper_preloader}>
    <img src={preloader} />
  </div>
  
  )
}

export default Preloader;
