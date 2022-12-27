import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import CreateNoteView from "./note/ui/create-note";
import GetNoteView from "./note/ui/get-note";
import { ColorModeContextProvider } from "./context/ColorModeContext";
import Header from "./shared/ui/header";
import Footer from "./shared/ui/footer";

const customTheme = {
  typography: {
    fontFamily: '"Courier New", Courier, monospace',
  },
};

function App() {
  return (
    <ColorModeContextProvider customTheme={customTheme}>
      <CssBaseline />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/note" />} />
          <Route path="*" element={<Navigate to="/note" />} />
          <Route path="/note" element={<CreateNoteView />} />
          <Route path="/note/:url" element={<GetNoteView />} />
        </Routes>
      </Router>
      <Footer />
    </ColorModeContextProvider>
  );
}

export default App;
