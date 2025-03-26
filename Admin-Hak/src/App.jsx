import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthlayOut} from "../src/Page/Root/AuthLayOut"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AuthLayOut />}>

    </Route>
    
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}