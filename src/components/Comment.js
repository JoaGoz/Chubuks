import React, { useState } from "react";
import "../assets/styles.css";

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
    if (e.target.value.length > 300) {
      setError("El comentario no serán más de 300 caracteres.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      setError("El espacio no puede ir vacío.");
      return;
    }
    onSubmit(comment);
    setComment("");
  };

  return (
    <section className="comment-section">
      <h2 className="comment-title">Comentarios</h2>
      <p className="comment-subtitle">¿Sugerencia? ¿Opinión? Puedes escribirla acá</p>

      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Escribe tu comentario..."
          maxLength={300}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default CommentForm;
