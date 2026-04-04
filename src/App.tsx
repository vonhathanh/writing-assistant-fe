import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Book from "./components/Book";
import Chapter from "./components/Chapter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book" element={<Book />} />
        <Route path="/chapter" element={<Chapter />} />
      </Routes>
    </>
  );
}

export default App;
