import Button from "@/components/Button";
import { notes } from "../../data/notes";
import Link from "next/link";

export default function NotesPage() {
  return (
    <div className="m-3">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">My Notes</h1>{" "}
      <Button text="Add a Note" />
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`}>
            <div className="group h-full rounded-2xl border border-blue-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500 cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  {note.tag}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {note.title}
              </h2>

              <div className="mt-6 flex items-center text-blue-600 font-medium">
                View Note →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
