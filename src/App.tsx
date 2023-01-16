import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
