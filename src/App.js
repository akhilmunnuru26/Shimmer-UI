import { useState } from "react";
import About from "./components/About";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teams from "./components/Teams";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Accordion from "./components/Accordion";

// Always Create a Wrapper component/ Higher order component like Protected Route Component
const App = () => {
  const [lang, setLang] = useState("en");

  const languages = [
    { id: "te", value: "Telugu" },
    { id: "hi", value: "Hindi" },
    { id: "en", value: "English" },
    { id: "sp", value: "Spanish" },
    { id: "ru", value: "Russia" },
  ];
  return (
    <div>
      <header className="text-lg font-bold text-white mb-2 bg-black flex flex-row align-middle justify-between p-2">
        Meme Application
        <nav className="flex flex-row">
          <a href="/" className="mx-2">
            Home
          </a>
          <a href="/About" className="mx-2">
            About
          </a>
          <a href="/accordion">
            Accordion
          </a>
          <a className="mx-2" href="/teams">
            Teams
          </a>
          <a className="mx-2" href="/login">
            Login
          </a>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="block w-full px-2 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer appearance-none"
          >
            {languages.map((item) => (
              <option
                name={item.id}
                key={item.id}
                value={item.id}
                className="py-2"
              >
                {item.value}
              </option>
            ))}
          </select>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/About" element={<About lang={lang} />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/Accordion" element={<Accordion />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
