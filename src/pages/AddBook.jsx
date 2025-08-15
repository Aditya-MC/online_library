import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import { CATEGORIES } from "../data/books";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "Fiction",
    rating: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.author.trim()) e.author = "Author is required";
    if (!form.category || form.category === "All") e.category = "Pick a specific category";
    const r = Number(form.rating);
    if (!form.rating || isNaN(r) || r < 0 || r > 5) e.rating = "Rating must be 0–5";
    if (!form.description.trim() || form.description.trim().length < 10)
      e.description = "Description must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(addBook({
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category,
      rating: Number(form.rating),
      description: form.description.trim(),
    }));
    // redirect to Browse with that category so it's visible
    navigate(`/books/${encodeURIComponent(form.category)}`);
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl bg-white p-8 shadow">
        <h1 className="mb-6 text-2xl font-bold">Add Book</h1>
        <form onSubmit={onSubmit} className="grid gap-5">
          <div>
            <label className="mb-1 block text-sm font-medium">Title</label>
            <input
              className="w-full rounded-xl border bg-white px-4 py-2"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Author</label>
            <input
              className="w-full rounded-xl border bg-white px-4 py-2"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
            {errors.author && <p className="mt-1 text-sm text-red-600">{errors.author}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Category</label>
              <select
                className="w-full rounded-xl border bg-white px-4 py-2"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {CATEGORIES.filter(c => c !== "All").map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Rating (0–5)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                className="w-full rounded-xl border bg-white px-4 py-2"
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
              />
              {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Description</label>
            <textarea
              rows={5}
              className="w-full rounded-xl border bg-white px-4 py-2"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>

          <button
            type="submit"
            className="rounded-xl bg-gray-900 px-6 py-3 text-white hover:opacity-90"
          >
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
}
