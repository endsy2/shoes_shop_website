import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Test } from "./Pages/Test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
      <Route path="/" element={<Test />} />
      </Route>
      {/* Wildcard route to handle 404 */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
