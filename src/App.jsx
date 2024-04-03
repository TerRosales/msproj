import "./global.css";
import Header from "./components/Header";
import FormSelection from "./components/FormSelection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-2xl text-blue-950 font-semibold justify-center text-center py-8">
      <Header />
      <div className="">
        <FormSelection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
