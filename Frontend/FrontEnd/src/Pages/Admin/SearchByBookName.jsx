import React, { useState } from 'react';
import axios from 'axios'
import '../cssFiles/Admin/FindUserById.css'; // reuse the same CSS

function BookSearch() {
  const [bookName, setBookName] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/book/searchName`, {
        params: { name: bookName }
      });

      console.log(response);
      setBook(response.data);
      setError('');
    } catch (err) {
      console.log(err)
      setBook(null);
      setError('Book not found or an error occurred.');
    }
  };

  return (
    <div className="find-user-page">
      <div className="find-user-container">
        <h2 className="find-user-title">Search Book by Name</h2>

        <div className="find-user-input-group">
          <input
            type="text"
            placeholder="Enter Book Name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="find-user-input"
          />
          <button
            onClick={handleSearch}
            className="find-user-button"
          >
            Search
          </button>
        </div>

        {error && <p className="find-user-error">{error}</p>}

        {book && (
          <div className="find-user-table-container">
            <table className="find-user-table">
              <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>ISBN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{book.bookId}</td>
                  <td>{book.bookName}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.quantity ?? 'N/A'}</td>
                  <td>{book.isbn}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookSearch;
