import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-supporting">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! The page you're looking for cannot be found.</p>
        <p className="text-lg mb-8">It might have been moved, deleted, or you may have typed the URL incorrectly.</p>

        <Link
          to="/"
          className="px-8 py-3 bg-supporting text-white font-semibold rounded-lg shadow-md hover:bg-supporting-dark transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
