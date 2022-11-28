import data from "../data/statisticData";

function StatisticCard() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();

  return (
    <div className="card bg-white mb-4 w-3/4">
      <h1 className="ml-5 p-2 font-bold text-4xl">History :</h1>
      <p className="ml-5 p-2 font-bold text-4xl">{month} - {day} - {year}</p>
      <div className="card-body flex flex-row gap-x-8 gap-y-4 flex-wrap justify-center xl:grid xl:grid-cols-3">
        {data.map((item, key) => {
          return (
            <div className="card-title border-b-2 border-[#ccc]" key={key}>
              <item.icon />
              <h1>{item.title} : </h1>
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatisticCard;
