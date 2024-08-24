import { Heading } from "./components/Head/heading";
import { MainPage } from "./components/Main/main_page";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-end">
        <Navbar></Navbar>
      </div>
      <Heading></Heading>
      <MainPage></MainPage>
    </ThemeProvider>
  );
}

export default App;
