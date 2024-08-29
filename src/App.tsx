import { CardsPage } from "./components/Cards/card_page";
import { Heading } from "./components/Head/heading";
import { MainPage } from "./components/Main/main_page";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import { UnderHoodPage } from "./components/UnderHood/under_hood_page";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-end">
        <Navbar></Navbar>
      </div>
      <Heading></Heading>
      <MainPage></MainPage>
      <CardsPage></CardsPage>
      <UnderHoodPage></UnderHoodPage>
    </ThemeProvider>
  );
}

export default App;
