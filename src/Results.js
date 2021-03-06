import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {

  return (
    <div className="search">
      {
        !pets.length ?
          <h1>No pets found!</h1>
          :
          pets.map(function (pet) {
            return <Pet
              animal={pet.species}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id = {pet.id}
            />;          

          })
      }
    </div>
  );
};

export default Results;
