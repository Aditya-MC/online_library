import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl bg-white p-10 text-center shadow">
        <h1 className="mb-2 text-3xl font-bold">404 — Page Not Found</h1>
        <p className="mb-6 text-gray-600">That page took a coffee break.</p>
        <Link to="/" className="rounded-xl bg-gray-900 px-4 py-2 text-white hover:opacity-90">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
