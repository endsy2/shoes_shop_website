// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayOut } from "./page/Auth/LayOut";
import Home from "./pages/Home";  // Example additional page
import About from "./pages/About"; // Example additional page

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />  {/* Default child route */}
          <Route path="about" element={<About />} />
          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;