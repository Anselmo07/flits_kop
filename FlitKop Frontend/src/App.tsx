import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/section/FloatingWhatsApp";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <AppRoutes />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;