// components/SearchBar.tsx
import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center space-x-4 border border-gray-300 rounded-lg p-3 shadow-lg focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 ease-in-out">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full p-3 border-none outline-none rounded-lg text-sm text-gray-700 focus:ring-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>
    </form>
  );
}
