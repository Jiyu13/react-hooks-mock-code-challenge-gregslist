import React, { useState, useEffect } from "react";
import AddNewListing from "./AddNewListing";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {

  const [lists, setLists] = useState([])
  const [fav, setFav] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [isSort, setIsSort] = useState(false)
  const [showForm, setShowForm] = useState(false)


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setLists(data))
  }, []);


  function onSearchChange(search) {
    setSearchInput(search)
  }


  function onDeleteListing(deletedList) {
    const updatedListings = lists.filter(list => list.id !== deletedList.id)
    setLists(updatedListings)
  }


  function onHandleSort() {
    setIsSort(isSort => !isSort)
  }


  function onShowForm() {
    setShowForm(showForm => !showForm)
  }

  
  function onAddNewListing(newObj) {
    setLists([...lists, newObj])
  }

  
  let searchResults = lists.filter(list => {
    return list.description.toLowerCase().includes(searchInput.toLowerCase())
  })


  if (isSort) {
    searchResults = searchResults.sort((a, b) => a.location.localeCompare(b.location))
  }

  return (
    <div className="app">
      <Header onSearchChange={onSearchChange} onHandleSort={onHandleSort}/>
      
      <div className="buttonContainer">
        <button onClick={onShowForm}>{showForm ? "Hide Form" : "Add a Listing!"}</button>
      </div>
      {showForm ? <AddNewListing onAddNewListing={onAddNewListing}/> : null}

      <ListingsContainer lists={searchResults} fav={fav} setFav={setFav} onDeleteListing={onDeleteListing} />
    </div>
  );
}

export default App;
