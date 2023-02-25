import React from "react";
import Search from "./Search";
import Sort from "./Sort";



function Header( {onSearchChange, onHandleSort} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={onSearchChange}/>
      <Sort onHandleSort={onHandleSort}/>
    </header>
  );
}

export default Header;
