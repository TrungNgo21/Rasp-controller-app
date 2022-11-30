import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Form from "./components/Form";
import Bakery from "./components/pics/bakery.jpg";
function App() {
  return (
    <div className="">
      <Navbar />
      <main className=" bg-slate-200 card rounded-none">
        <div className="card rounded-none">
          <div className="h-[300px] md:h-[400px] xl:h-[500px] bg-slate-700 relative">
            <img
              src={Bakery}
              className="mix-blend-overlay absolute object-cover w-full h-full"
            />
          </div>
          <div className="card-body absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-[5px] border-2 border-[#ccc] rounded-lg bg-[rgba(0,0,0,0.6)]">
            <h2 className="card-title text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-neutral-content ">
              SmartBakery's
            </h2>
            <p className="text-lg text-neutral-content">
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
