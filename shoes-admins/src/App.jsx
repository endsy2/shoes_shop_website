import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "../src/page/MainLayOut";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayOut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;