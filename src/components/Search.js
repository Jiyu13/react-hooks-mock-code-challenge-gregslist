import React from "react";

function Search( {onSearchChange} ) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  function handleSearch(e){
    const value = e.target.value
    onSearchChange(value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={""}
        onChange={(e) => handleSearch(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
