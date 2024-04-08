import "./global.css";
import Header from "./components/Header";
import FormSelection from "./components/FormSelection";
import Foot from "./components/Footer";
import LocationPage from "./pages/LocationPage";
import InspectionPage from "./pages/InspectionPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-2xl text-blue-950 font-semibold justify-center text-center py-8 flex flex-col min-h-screen">
      <Header />
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<FormSelection />}/>
          <Route path="/location-1-page" element={<LocationPage />}/>
          <Route path="/inspection-page" element={<InspectionPage />}/>
        </Routes>
      </div>
      <Foot />
    </div>
  );
}

export default App;
