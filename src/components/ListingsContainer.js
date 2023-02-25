import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( {lists, fav, setFav, onDeleteListing} ) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {lists.map(list => 
            <ListingCard 
              key={list.id}
              list={list}
              onDeleteListing={onDeleteListing}
            />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
