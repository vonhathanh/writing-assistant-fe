import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import Book from "./components/Book.jsx";
import Chapter from "./components/Chapter.jsx";
import "./App.css";

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
