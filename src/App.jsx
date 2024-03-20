import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CategoriesPage from "./pages/CategoriesPage";
import ScrollToTop from "./ui/ScrollToTop";
import AdminCoursesPage from "./pages/AdminCoursesPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/courses/admin" element={<AdminCoursesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
