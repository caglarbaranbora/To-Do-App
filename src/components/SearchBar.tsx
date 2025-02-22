export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) {
  return (
    <input
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Görev Ara..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
