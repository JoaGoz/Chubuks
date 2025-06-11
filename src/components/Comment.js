import React, { useState } from "react";
import "../assets/styles.css";

const Comment = ({ onSubmit }) => {
  
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
    if (e.target.value.length > 500) {
      setError("El comentario no puede superar los 500 caracteres.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      setError("No puede estar vacío.");
      return;
    }
    onSubmit(comment);
    setComment("");
  };

  return (
    <div className="background">
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Escribe tu comentario...Write your comment"
          maxLength={300}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Comment;
