import { Link } from "react-router-dom";

const AddProductHeader = ({ btn1, btn2, route1, route2 }) => {
  return (
    <div className="flex gap-14 justify-end mr-10">
      <Link className="green-btn" to={`/dashboard/${route1}`}>
        {btn1}
      </Link>
      <Link className="green-btn" to={`/dashboard/${route2}`}>
        {btn2}
      </Link>
    </div>
  );
};

export default AddProductHeader;
