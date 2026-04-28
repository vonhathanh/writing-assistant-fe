import BookList from "./BookList";
import HeroHeading from "./HeroHeading";
import SearchBar from "./SearchBar";

export default function Body() {
  return (
    <div className="body-container">
      <HeroHeading />
      <SearchBar />
      <BookList />
    </div>
  )
}