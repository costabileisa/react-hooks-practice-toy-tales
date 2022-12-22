import React, { useState } from "react";

function ToyForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    onFormSubmit(formData)
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
