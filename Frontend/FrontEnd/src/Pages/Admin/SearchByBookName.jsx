import React, { useState } from 'react';
import axios from 'axios';

function BookSearch() {
  const [bookName, setBookName] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/book/searchName`, {
        params: { name: bookName }
      });
      setBook(response.data);
      setError('');
    } catch (err) {
      setBook(null);
      setError('Book not found or an error occurred.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Search Book by Name</h1>
      <input
        type="text"
        className="border px-3 py-2 w-full mb-3"
        placeholder="Enter book name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {book && (
        <table className="mt-6 w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">Book ID</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Author</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Quantity</th>
              <th className="border px-3 py-2">ISBN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">{book.bookId}</td>
              <td className="border px-3 py-2">{book.bookName}</td>
              <td className="border px-3 py-2">{book.author}</td>
              <td className="border px-3 py-2">{book.price}</td>
              <td className="border px-3 py-2">{book.quantity ?? 'N/A'}</td>
              <td className="border px-3 py-2">{book.isbn}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookSearch;
