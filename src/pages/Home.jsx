import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/books";

export default function Home() {
  const books = useSelector((s) => s.books.items);
  const popular = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <section className="mb-8 rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold">
          Welcome to the Online <span className="text-blue-600">Library</span>
        </h1>
        <p className="text-gray-600">
          Browse categories, search titles, read details, and add your own books.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Categories</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              to={`/books/${encodeURIComponent(c)}`}
              className="rounded-xl bg-white p-4 text-center shadow hover:shadow-md"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Popular Books</h2>
          <Link to="/books/All" className="text-blue-600 hover:underline">View all</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {popular.map((b) => (
            <Link
              key={b.id}
              to={`/book/${b.id}`}
              className="rounded-2xl bg-white p-4 shadow hover:shadow-md"
            >
              <div className="text-lg font-semibold">{b.title}</div>
              <div className="text-sm text-gray-600">by {b.author}</div>
              <div className="mt-2 text-sm">⭐ {b.rating}</div>
              <div className="mt-2 line-clamp-3 text-sm text-gray-700">
                {b.description}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
