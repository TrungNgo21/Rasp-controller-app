import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Form from "./components/Form";
import Bakery from "./components/pics/bakery.jpg"
function App() {
  return (
    <div className="">
      <Navbar />
      <main className=" bg-slate-200 card rounded-none">
        <div className="card rounded-none">
          <div className=" h-[400px] bg-slate-800 relative">
            <img src={Bakery} className="mix-blend-overlay absolute object-cover w-full h-full"/>
          </div>
          <div className="card-body absolute">
            <h2 className="card-title text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-neutral-content">
              Smarthome
            </h2>
            <p className="text-lg text-neutral-content">
              Innovative Choice - Manage your living at ease with a button
            </p>
          </div>
        </div>

        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
