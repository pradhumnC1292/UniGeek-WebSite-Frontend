import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ScrollToTop from "./layouts/ScrollToTop";
import Home from "./pages/Home";
import JavaCourse from "./pages/JavaCourse";
import MernCourse from "./pages/MernCourse";
import UiUxCourse from "./pages/UiUxCourse";
import LevelupCourse from "./pages/LevelupCourse";
import BecomeMentor from "./pages/BecomeMentor";
import NotFound from "./pages/NotFound";
import HiringPage from "./pages/HiringPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="java-course" element={<JavaCourse />} />
          <Route path="mern-course" element={<MernCourse />} />
          <Route path="uiux-course" element={<UiUxCourse />} />
          <Route path="levelup-course" element={<LevelupCourse />} />
          <Route path="become-a-mentor" element={<BecomeMentor />} />
          <Route path="hire-from-us" element={<HiringPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
