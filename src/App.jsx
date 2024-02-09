import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProjectDetailPage } from "./components";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import SingleBlog from "./Pages/SngleBlog";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Okr from "./Pages/Okr";
import Note from "./Pages/Note";
import DashboardBlogs from "./Pages/DashboardBlogs";
import ProjectsDashboard from "./Pages/ProjectsDashboard";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/projectdetail/:name" element={<ProjectDetailPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/reports" element={<Reports />} />
        <Route path="/dashboard/okr" element={<Okr />} />
        <Route path="/dashboard/notes" element={<Note />} />
        <Route path="/dashboard/blogs" element={<DashboardBlogs />} />
        <Route path="/dashboard/projects" element={<ProjectsDashboard />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
