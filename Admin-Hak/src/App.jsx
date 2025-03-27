import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayOut from "./Pages/Root/AuthLayOut"; // Correct path
import RootLayOut from "./Pages/Root/RootLayOut"; // Correct path

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayOut />} />
        <Route path="/root" element={<RootLayOut />} /> {/* Lowercase path */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
