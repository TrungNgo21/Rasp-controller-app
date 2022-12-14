import Power from "./shared/Power";
import Card from "./shared/Card";
import StatisticCard from "./StatisticCard";
import { useState } from "react";
import Hdata from "../data/statisticData"
import Pdata from "../data/projectedData"

function Form() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex-col flex items-center justify-center my-8">
      <StatisticCard data={Hdata} title={"History :"}/>
      <StatisticCard data={Pdata} title={"Projected :"}/>
      <Card status={isOn} title={isOn ? "Active" : "Off"} />
      <Card status={isOn} title={isOn ? "Active" : "Off"} />
      <Card status={isOn} title={isOn ? "Active" : "Off"} />

      <div className="card bg-white flex-col sm:flex-row w-3/4 justify-center flex-wrap items-center">
        <Power isOn={isOn} setIsOn={setIsOn} />
        <Power isOn={isOn} setIsOn={setIsOn} />
        <Power isOn={isOn} setIsOn={setIsOn} />
      </div>
    </div>
  );
}

export default Form;
