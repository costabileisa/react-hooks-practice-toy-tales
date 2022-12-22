import React from "react";

function ToyCard({ toy, onDonate, onLike }) {
  const { name, image, likes, id } = toy;

  function handleDonation(e) {
    const donateId = Number(e.target.parentNode.id)
    onDonate(donateId)
  }

  function handleLike(e) {
    const likeId = Number(e.target.parentNode.id)
    onLike(likeId)
  }

  return (
    <div className="card" id={id} >
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDonation} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
