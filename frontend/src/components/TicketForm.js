import React, { useState } from "react";
import { createTicket } from "../api";

const TicketForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await createTicket({ title, description });
    alert("Ticket Created: " + res.data.category);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Describe issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit Ticket</button>
    </form>
  );
};

export default TicketForm;
