import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [lists, setLists] = useState([])
  const [fav, setFav] = useState(false)
  const [searchInput, setSearchInput] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setLists(data))
  }, []);


  function onSearchChange(search) {
    setSearchInput(search)
  }


  function onDeleteListing(deletedList) {
    const updatedListings = lists.filter(list => list.id != deletedList.id)
    setLists(updatedListings)
  }

  const searchResults = lists.filter(list => {
    return list.description.toLowerCase().includes(searchInput.toLowerCase())
  })


  return (
    <div className="app">
      <Header onSearchChange={onSearchChange}/>
      <ListingsContainer lists={searchResults} fav={fav} setFav={setFav} onDeleteListing={onDeleteListing} />
    </div>
  );
}

export default App;
