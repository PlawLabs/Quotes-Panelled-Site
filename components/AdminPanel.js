import React, { useState } from 'react';
import QuoteForm from './QuoteForm';
import QuoteList from './QuoteList';

const AdminPanel = ({ onLogout }) => {
  const [quotes, setQuotes] = useState([]);

  const addQuote = (quote) => {
    setQuotes((prevQuotes) => [...prevQuotes, quote]);
  };

  const deleteQuote = (quoteId) => {
    setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== quoteId));
  };

  return (
    <div className="admin-panel-container">
      <h2>Admin Panel</h2>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
      <QuoteForm onAdd={addQuote} />
      <QuoteList quotes={quotes} onDelete={deleteQuote} />
    </div>
  );
};

export default AdminPanel;
