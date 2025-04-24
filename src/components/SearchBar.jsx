export default function SearchBar({ onSearch }) {
    return (
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Buscar productos (tomate, leche...)"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }