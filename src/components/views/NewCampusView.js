/*==================================================
NewCampusView.js

Form UI for creating a new campus.
==================================================*/
import { useState } from "react";

const NewCampusView = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCampus({ name, address, description, imageUrl });
  };

  return (
    <div>
      <h1>Add New Campus</h1>
      <form onSubmit={handleSubmit}>
        <label>Name (required):</label><br />
        <input value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

        <label>Address (required):</label><br />
        <input value={address} onChange={(e) => setAddress(e.target.value)} required /><br /><br />

        <label>Description (optional):</label><br />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />

        <label>Image URL (optional):</label><br />
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewCampusView;
