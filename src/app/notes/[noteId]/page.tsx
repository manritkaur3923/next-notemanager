import notFound from "@/app/not-found";
import { notes } from "@/data/notes";
const NoteDisplayPage = async ({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) => {
  const { noteId } = await params;
  const note = notes.find((n) => Number(n.id) === Number(noteId));
  if (note === undefined) {
    notFound();
  }

  return (
    <div className="m-3 py-4 px-5 bg-blue-900 border border-blue-950 rounded w-fit">
      <h2 className="text-2xl font-semibold text-white ">
        Note Id : {note!.id}
      </h2>
      <h2 className="text-2xl font-semibold text-white ">
        Note Title : {note!.title}
      </h2>
      <h2 className="text-2xl font-semibold text-white ">
        Note Tag : {note!.tag}
      </h2>
    </div>
  );
};

export default NoteDisplayPage;
