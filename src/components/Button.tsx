interface ButtonProps {
  text: string;
  onClick?: () => void;
}
export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="text-md bg-purple-300 border border-purple-800 py-2 px-3 rounded font-semibold"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
