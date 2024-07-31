import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/" className="text-white text-2xl font-bold">
            <h2>React CRUD</h2>
          </Link>
        </div>
      </nav>
      <div className="conatiner mx-auto p-2 h-full">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
