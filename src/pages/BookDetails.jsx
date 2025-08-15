import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams(); // dynamic route /book/:id
  const book = useSelector((s) => s.books.items.find((b) => b.id === id));

  if (!book) {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <div className="rounded-2xl bg-white p-8 shadow">
          <h1 className="mb-2 text-2xl font-bold">Book not found</h1>
          <Link to="/books/All" className="text-blue-600 hover:underline">
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold">{book.title}</h1>
        <p className="text-gray-600">by {book.author}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="rounded-full bg-gray-100 px-3 py-1">Category: {book.category}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">⭐ {book.rating}</span>
        </div>
        <p className="mt-6 leading-relaxed text-gray-800">{book.description}</p>

        <Link
          to={`/books/${encodeURIComponent(book.category)}`}
          className="mt-8 inline-block rounded-xl bg-gray-900 px-4 py-2 text-white hover:opacity-90"
        >
          Back to Browse
        </Link>
      </div>
    </div>
  );
}
