function Button({ func }) {
  return (
    <div>
      <input type="checkbox" className="toggle toggle-lg" name="" id="" />
      <button className=" btn btn-lg w-2/3 mb-5">{func}</button>
    </div>
  );
}

export default Button;
