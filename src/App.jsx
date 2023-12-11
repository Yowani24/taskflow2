import { Outlet } from "react-router-dom";
import { LangProvider } from "../hook/LangContext";
import "./App.css";

function App() {
  return (
    <LangProvider>
      <Outlet />
    </LangProvider>
  );
}
export default App;
