import React from 'react';
import classes from"./Header.module.css"

function Header(){
   return (
      <header className={classes.header}>
        <img
          src="https://api.freelogodesign.org/files/fe74caeb24bf4672bf18b587a265139e/thumb/logo_200x200.png?v=0"
          alt=""
        />
      </header>
   );
}

export default Header;