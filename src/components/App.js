import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
