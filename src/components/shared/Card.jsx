import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";

function Card({ title, status }) {
  return (
    <div className="card shadow-lg bg-base-100 mb-5 w-3/4">
      <div className="card-body flex-row justify-between">
        <div className="card-title">Status: </div>
        <div
          className={`badge ${
            status ? "badge-success" : "badge-error"
          } text-xl p-4 text-white font-semibold`}
        >
          {status ? (
            <BsLightbulbFill className="mr-2" />
          ) : (
            <BsLightbulbOffFill className="mr-2" />
          )}
          {title}
        </div>
      </div>
    </div>
  );
}

export default Card;
