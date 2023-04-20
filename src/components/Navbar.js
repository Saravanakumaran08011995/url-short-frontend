import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center py-4 px-2 text-gray-100 hover:text-gray-400"
            >
              <svg
                className="h-6 w-6 mr-1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L3 5v8c0 4.42 2.58 8.43 6.62 10.24.22.1.46.16.7.16.24 0 .48-.06.7-.16C18.42 21.43 21 17.42 21 13V5l-9-4zm0 2.32L18.3 6 12 9.59 5.7 6 12 3.32zm0 16.23c-2.92 0-5.59-1.42-7.24-3.8C6.38 12.53 9.52 11 12 11s5.62 1.53 7.24 4.75c-1.65 2.38-4.32 3.8-7.24 3.8z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-semibold text-xl tracking-tight">Shortener</span>
            </Link>
          </div>
          <div className="flex">
            <Link
              to="/login"
              className="py-4 px-2 text-gray-100 hover:text-gray-400"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="py-4 px-2 text-gray-100 hover:text-gray-400"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
