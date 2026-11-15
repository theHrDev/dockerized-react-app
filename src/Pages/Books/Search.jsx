import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import Loader from "../../Component/Loader/Loader";
// import "./search.css";

const Search = () => {
  const [query, setQuery] = useState(""); 
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

 
  const handleSearch = async (e) => {
    e.preventDefault(); 

    if (!query) return; 

    setLoading(true); 
    setError(""); 

    try {
      const { data } = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: query,
            maxResults: 10, 
            key: import.meta.env.VITE_GOOGLE_API_KEY, 
          },
        }
      );
      setBooks(data.items || []); 
    } catch (error) {
      setError("Error fetching books. Please try again."); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="bg-primary from-blue-50 via-purple-50 to-pink-50 min-h-screen py-12">
      <NavBar />
      <div className="max-w-4xl mx-auto mt-5 bg-white p-8 rounded-xl shadow-2xl shadow-gray-500">
        <h1 className="md:text-4xl text-2xl font-extrabold text-center text-gray-800 mb-8">
          Discover Your Next Favorite Book
        </h1>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex mb-8 shadow-xl rounded-xl overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books"
            className="w-full p-4 border border-gray-300 rounded-l-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-supporting transition duration-300"
          />
          <button
            type="submit"
            className="px-6 py-4 bg-gradient-to-r from-supporting to-supporting-dark text-white rounded-r-xl hover:bg-supporting-dark focus:outline-none focus:ring-2 focus:ring-supporting transition duration-300"
          >
            Search
          </button>
        </form>

        {/* Loading State */}
        {loading && <Loader />}

        {/* Error State */}
        {error && <div className="text-center text-red-500">{error}</div>}

        {/* Book Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.length ? (
            books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <Link to={`/book/${book.volumeInfo.title}/${book.id}`}>
                  <div className="flex flex-col items-center p-6 transition duration-500 ease-in-out hover:bg-gray-50">
                    <img
                      src={
                        book.volumeInfo.imageLinks?.thumbnail ||
                        "/path/to/placeholder.jpg"
                      }
                      alt={book.volumeInfo.title || "Book Cover"}
                      className="w-60 h-80 object-cover rounded-xl mb-4 shadow-md transition transform duration-300 hover:scale-105"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                      {book.volumeInfo.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-full">
              No books found. Try a different search query.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
