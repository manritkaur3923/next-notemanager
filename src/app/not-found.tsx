import Link from "next/link";

export default function notFound() {
  return (
    <div className="h-[93vh] bg-linear-to-br from-pink-100 via-pink-50 to-rose-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white/70 backdrop-blur-lg shadow-xl border border-pink-200 p-10 text-center">
        <div className="text-8xl mb-4">📖</div>

        <h1 className="text-5xl font-bold text-pink-600 mb-3">Oops!</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Note Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          We searched everywhere, but couldn't find the note you're trying to
          open.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/notes"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            View All Notes
          </Link>

          <Link
            href="/"
            className="border border-pink-300 text-pink-600 px-6 py-3 rounded-xl hover:bg-pink-50 transition"
          >
            Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-pink-500">
          Error 404 • Note unavailable
        </p>
      </div>
    </div>
  );
}
