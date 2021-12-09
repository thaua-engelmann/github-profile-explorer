import "./App.scss";

// Routes
import AppRoutes from "./Routes";
import { ContextProvider }from "./context/context";

function App() {
  return (
    <ContextProvider>
      <main className="container">
        <AppRoutes />
      </main>
    </ContextProvider>
  );
}

export default App;
