import { LangProvider } from "../hook/LangContext";
import "./App.css";
import RealEstate from "./components/realEstate";
import TaskFlowApp from "./components/taskFlowApp";

function App() {
  return (
    <LangProvider>
      <TaskFlowApp />
    </LangProvider>
  );
  // return <RealEstate />;
}
export default App;
