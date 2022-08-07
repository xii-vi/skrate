import { SignInPage } from "./pages/SignInPage";
import {Homepage} from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={ <SignInPage />} />
    <Route path="/dashboard" element={<ProtectedRoutes><Homepage /></ProtectedRoutes> } />
    </Routes>
    </>
  );
}

export default App;
