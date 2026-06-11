// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="px-2 w-screen bg-pink-300">
//       <nav className="w-50 flex justify-between py-2 gap-5 text-xl">
//         <Link href="/">Home</Link>
//         <Link href="/about">About</Link>
//         <Link href="/notes">Notes</Link>
//         <Link href="/counter">Counter</Link>
//       </nav>
//     </div>
//   );
// }

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-linear-to-r from-blue-600 to-sky-500 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          NotesApp
        </Link>

        <div className="flex items-center gap-6 text-white font-medium">
          <Link
            href="/"
            className="hover:text-blue-100 transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-100 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            href="/notes"
            className="hover:text-blue-100 transition-colors duration-200"
          >
            Notes
          </Link>

          <Link
            href="/counter"
            className="hover:text-blue-100 transition-colors duration-200"
          >
            Counter
          </Link>
        </div>
      </nav>
    </header>
  );
}
