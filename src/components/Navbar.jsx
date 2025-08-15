import { Link, NavLink } from "react-router-dom";

const active =
  "rounded-xl px-4 py-2 bg-gray-900 text-white transition";
const base =
  "rounded-xl px-4 py-2 hover:bg-gray-200 transition";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          Online<span className="text-blue-600">Library</span>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={({isActive}) => isActive ? active : base}>Home</NavLink>
          <NavLink to="/books/All" className={({isActive}) => isActive ? active : base}>Browse Books</NavLink>
          <NavLink to="/add" className={({isActive}) => isActive ? active : base}>Add Book</NavLink>
        </div>
      </nav>
    </header>
  );
}
