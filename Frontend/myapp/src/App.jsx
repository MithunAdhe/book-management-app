import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://127.0.0.1:8000/api/books/";

function App() {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [bookId, setBookId] = useState(""); // New state for manual ID
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published_date, setPublishedDate] = useState("");
  const [isbn_number, setIsbnNumber] = useState("");
  const [bookImage, setBookImage] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSubmitBook = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", bookId);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("published_date", published_date);
    formData.append("isbn_number", isbn_number);
    if (bookImage) formData.append("book_image", bookImage);

    try {
      if (currentBook) {
        await axios.put(`${API_URL}${currentBook.id}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(API_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      clearForm();
      fetchBooks();
    } catch (error) {
      console.error("Error submitting book:", error);
    }
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setBookId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setPublishedDate(book.published_date);
    setIsbnNumber(book.isbn_number);
    setBookImage(null);
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const clearForm = () => {
    setBookId("");
    setTitle("");
    setAuthor("");
    setPublishedDate("");
    setIsbnNumber("");
    setBookImage(null);
    setCurrentBook(null);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Book Manager</h1>

      <form onSubmit={handleSubmitBook} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Book ID (Required)"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          required
          disabled={currentBook !== null}
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="date"
          value={published_date}
          onChange={(e) => setPublishedDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="ISBN Number"
          value={isbn_number}
          onChange={(e) => setIsbnNumber(e.target.value)}
        />
        <input type="file" onChange={(e) => setBookImage(e.target.files[0])} />
        <button type="submit">
          {currentBook ? "Update Book" : "Add Book"}
        </button>
      </form>

      <div>
        <h2>Books</h2>
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-info">
              <p>
                <strong>ID:</strong> {book.id}
              </p>
              <p>
                <strong>Title:</strong> {book.title}
              </p>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Published Date:</strong> {book.published_date}
              </p>
              <p>
                <strong>ISBN:</strong> {book.isbn_number}
              </p>
              <button onClick={() => handleEditBook(book)}>Edit</button>
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </div>
            {book.book_image && (
              <img
                src={`http://127.0.0.1:8000${book.book_image}`}
                alt="Book Cover"
                className="book-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
