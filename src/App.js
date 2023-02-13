import "./App.css";
import { Navbar } from "./components/Navbar";
import GlobalRoutes from "./routes/GlobalRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <GlobalRoutes />
    </div>
  );
}

export default App;
