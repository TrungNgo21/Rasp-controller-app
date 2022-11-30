function StatisticCard({ data, title }) {
  const today = new Date();
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const tomorrowYear = tomorrow.getFullYear();
  const tomorrowMonth = tomorrow.getMonth();
  const tomorrowDay = tomorrow.getDate();

  return (
    <div className="card bg-white mb-4 w-3/4">
      <h1 className="ml-5 p-2 font-bold text-4xl">{title}</h1>
      <p className="ml-5 p-2 font-bold text-4xl">

        {(title === "History :") ? `${todayMonth} - ${todayDay} - ${todayYear}`: `${tomorrowMonth} - ${tomorrowDay} - ${tomorrowYear}`}
      </p>
      <div className="card-body gap-x-8 gap-y-4 justify-center grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {data.map((item, key) => {
          return (
            <div className="card-title border-2 p-2 rounded-lg border-[#ccc] text-center justify-center" key={key}>
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
