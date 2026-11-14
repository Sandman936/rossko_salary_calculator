export default function SearchBar() {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Поиск..."
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
}
