import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.css";

function Menu(props) {
  return (
    <ul className={classes.menu}>
      <li className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>
          Моя страница
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>
          Мессенджер
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>
          Пользователи
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
