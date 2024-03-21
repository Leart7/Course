import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CategoriesPage from "./pages/CategoriesPage";
import ScrollToTop from "./ui/ScrollToTop";
import AdminCoursesPage from "./pages/AdminCoursesPage";
import { Toaster } from "react-hot-toast";

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

          {/* <Route path="*" /> */}
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 3500,
            style: {
              fontWeight: "bold",
              width: "90%",
            },
          },
          error: {
            duration: 5000,
            style: {
              width: "90%",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
