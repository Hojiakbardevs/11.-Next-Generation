import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-end">
        <Navbar></Navbar>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
