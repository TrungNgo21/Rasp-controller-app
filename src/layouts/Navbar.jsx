import { FaRaspberryPi } from "react-icons/fa";
function Navbar({title}) {
  return (
    <nav className="navbar text-neutral-content shadow-lg bg-neutral w-full">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2 items-center">
          <FaRaspberryPi className="inline pr-2 text-5xl text-red-500" />
          <div className="text-lg font-bold align-middle">
            {title}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
    title: "Raspberry Controller",
  };

export default Navbar;
