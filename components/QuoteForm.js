import React, { useState } from 'react';

const QuoteForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && author) {
      const newQuote = {
        id: Math.random().toString(),
        text,
        author,
      };
      onAdd(newQuote);
      setText('');
      setAuthor('');
    }
  };

  return (
    <div className="quote-form-container">
      <h3>Add New Quote</h3>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label htmlFor="text">Quote</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the quote"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter the author"
            required
          />
        </div>
        <button type="submit" className="add-quote-button">
          Add Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
