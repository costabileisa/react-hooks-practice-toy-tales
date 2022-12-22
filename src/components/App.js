import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
const url = "http://localhost:3001/toys"

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onFormSubmit(formData) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newData => setToys([...toys, newData]))
  }

  function onDonate(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => setToys(toys.filter(toy => toy.id !== id)))
  }

  function onLike(id) {
    // const newToys = toys.map(toy => {
    //   if (toy.id === id) {
    //     return {...toy, likes: ++toy.likes}
    //   } else {
    //     return toy
    //   }
    // })
    // setToys(newToys)

    let currentLikes = toys.find(toy => toy.id === id).likes

    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: ++currentLikes
      })
    })
    .then(res => res.json())
    .then(newLikes => {
      const newToys = toys.map(toy => {
        if (toy.id === id) {
          return newLikes;
        } else {
          return toy
        }
      })
      setToys(newToys)
    })
  }

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={onFormSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onLike={onLike} onDonate={onDonate} toys={toys} />
    </>
  );
}

export default App;
