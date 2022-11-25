import Button from "./components/shared/Button";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Form from "./components/Form";
function App() {
  return (
    <div className="">
      <Navbar />
      <main className="py-10 bg-slate-200">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
