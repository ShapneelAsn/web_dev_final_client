/*==================================================
EditCampusView.js

Form UI for editing an existing campus.
==================================================*/
import { useState, useEffect } from "react";

const EditCampusView = ({ campus, editCampus }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Pre-fill form when campus loads
  useEffect(() => {
    if (campus) {
      setName(campus.name || "");
      setAddress(campus.address || "");
      setDescription(campus.description || "");
      setImageUrl(campus.imageUrl || "");
    }
  }, [campus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editCampus({
      name,
      address,
      description,
      imageUrl,
    });
  };

  return (
    <div>
      <h1>Edit Campus</h1>
      <form onSubmit={handleSubmit}>
        <label>Name (required):</label><br />
        <input value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

        <label>Address (required):</label><br />
        <input value={address} onChange={(e) => setAddress(e.target.value)} required /><br /><br />

        <label>Description (optional):</label><br />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />

        <label>Image URL (optional):</label><br />
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /><br /><br />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCampusView;
