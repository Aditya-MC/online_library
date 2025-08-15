import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/books";

export default function BrowseBooks() {
  const { category } = useParams(); // dynamic route /books/:category
  const [q, setQ] = useState("");
  const books = useSelector((s) => s.books.items);

  const normalizedCategory = decodeURIComponent(category || "All");

  const filtered = useMemo(() => {
    const byCat =
      !normalizedCategory || normalizedCategory === "All"
        ? books
        : books.filter((b) => b.category === normalizedCategory);

    const query = q.trim().toLowerCase();
    if (!query) return byCat;

    return byCat.filter(
      (b) =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query)
    );
  }, [books, normalizedCategory, q]);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Browse Books</h1>
        <div className="flex items-center gap-2">
          <select
            value={normalizedCategory}
            onChange={(e) =>
              (window.location.href = `/books/${encodeURIComponent(e.target.value)}`)
            }
            className="rounded-xl border bg-white px-4 py-2 shadow"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title or author..."
            className="w-64 rounded-xl border bg-white px-4 py-2 shadow"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white p-8 text-center shadow">
          <p className="text-gray-600">No books found.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((b) => (
            <div key={b.id} className="rounded-2xl bg-white p-4 shadow">
              <div className="text-lg font-semibold">{b.title}</div>
              <div className="text-sm text-gray-600">by {b.author}</div>
              <div className="mt-2 text-sm">Category: {b.category}</div>
              <div className="text-sm">⭐ {b.rating}</div>
              <Link
                to={`/book/${b.id}`}
                className="mt-4 inline-block rounded-xl bg-gray-900 px-4 py-2 text-white hover:opacity-90"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
