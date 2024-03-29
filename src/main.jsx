import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Protected from "./Protected.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import TranscriptionForm from "./pages/TranscriptionForm.jsx";
import ShowCase from "./pages/ShowCase.jsx";
import TaskFlow from "./pages/TaskFlow.jsx";
import Testes from "./pages/Testes.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />} />
      </Route>
      <Route path="/" element={<Protected />}>
        <Route path="home" element={<ShowCase />} />
      </Route>
      <Route path="/" element={<Protected />}>
        <Route path="taskflow" element={<TaskFlow />} />
      </Route>
      <Route path="/" element={<Protected />}>
        <Route path="transcriptionForm" element={<TranscriptionForm />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
