import React from "react";

// public/images/heater.jpg

function ListingCard( { list, fav, setFav, onDeleteListing } ) {

  const {id, description, image, location} = list

  function handleClick() {
    setFav(fav => !fav)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(() => onDeleteListing(list))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}


export default ListingCard;
