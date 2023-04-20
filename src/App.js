import React from "react";
import Homepage from "./pages/Homepage";
import DetailCard from "./pages/DetailCard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<DetailCard />} />
    </Routes>
  );
}

export default App;
