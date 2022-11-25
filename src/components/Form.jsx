import Power from "./shared/Power";
import Card from "./shared/Card";
import { useState } from "react";

function Form() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex-col flex items-center justify-evenly h-screen">
      <Card status={isOn} title={isOn ? "Active" : "Off"}/>
      <Power isOn={isOn} setIsOn={setIsOn}/>
    </div>
  );
}

export default Form;
