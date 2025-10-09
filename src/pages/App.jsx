import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./login/Login";

const router = createBrowserRouter([{ path: "/login", element: <Login /> }]);

export default function App() {
  return <RouterProvider router={router} />;
}
