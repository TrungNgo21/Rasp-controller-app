import { FaPowerOff } from "react-icons/fa";
import startFirebase from "../../firebase.config";
import { ref, set } from "firebase/database";
function Power({ isOn, setIsOn }) {
  const onSubmit = () => {
    const db = startFirebase();
    set(ref(db, "data/"), {
      Status: !isOn,
    });
  };

  return (
    <div
      className={`flex shadow-2xl justify-center items-center rounded-full w-[220px] h-[220px] border-2 transition-all duration-400 ${
        isOn
          ? "bg-gradient-to-r from-green-400 to-blue-500"
          : "bg-gradient-to-l from-orange-400 to-red-500"
      }`}
    >
      <button
        onClick={() => {
          onSubmit();
          setIsOn((prev) => !prev);
        }}
        type="submit"
        className={`btn outline-none flex justify-center items-center w-[200px] h-[200px] rounded-full text-5xl
        ${isOn ? "text-green-400" : "text-red-500"}
         `}
      >
        <FaPowerOff />
      </button>
    </div>
  );
}

export default Power;
