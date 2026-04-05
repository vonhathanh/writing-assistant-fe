export default function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search for books or authors..." className="search-input" />
      <select className="search-category">
        <option value="all">All</option>
        <option value="fantasy">Fantasy</option>
        <option value="romance">Romance</option>
        <option value="science-fiction">Sci-Fi</option>
        <option value="horror">Horror</option>
        <option value="historical">Historical</option>
        <option value="action">Action</option>
      </select>
    </div>
  );
}
