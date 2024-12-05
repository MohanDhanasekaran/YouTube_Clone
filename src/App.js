import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import { Video } from "./Pages/Video/Video.jsx";
import SearchResults from "./Components/SearchResults/SearchResults.jsx";
function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />

      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/video/search/:query" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
