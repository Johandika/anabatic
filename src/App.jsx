import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListPage from "./pages/ListPage";
import UploadPage from "./pages/UploadPage";

export default function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Dashboard />}>
        <Route index element={<Dashboard />} />
        <Route path={"/list"} element={<ListPage />} />
        <Route path={"/upload"} element={<UploadPage />} />
      </Route>
    </Routes>
  );
}
