import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonate, onLike }) {
  const getToys = toys.map(toy => {
    return (
    <ToyCard key={toy.id} onLike={onLike} onDonate={onDonate} toy={toy} />
    )
  })
  return (
    <div id="toy-collection">
      {getToys}
    </div>
  );
}

export default ToyContainer;
