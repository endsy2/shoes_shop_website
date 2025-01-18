import { Link } from "react-router-dom";

const AddProductHeader = ({ btn1, btn2, route1, route2, btn3, route3, btn4, route4 }) => {
  return (
    <div className="flex flex-wrap justify-end gap-4 p-4">
      {btn1 && route1 && (
        <Link
          className="green-btn text-center py-2 px-4 rounded-lg shadow-md transition hover:bg-green-700"
          to={`/dashboard/${route1}`}
        >
          {btn1}
        </Link>
      )}
      {btn2 && route2 && (
        <Link
          className="green-btn text-center py-2 px-4 rounded-lg shadow-md transition hover:bg-green-700"
          to={`/dashboard/${route2}`}
        >
          {btn2}
        </Link>
      )}
      {btn3 && route3 && (
        <Link
          className="green-btn text-center py-2 px-4 rounded-lg shadow-md transition hover:bg-green-700"
          to={`/dashboard/${route3}`}
        >
          {btn3}
        </Link>
      )}
      {btn4 && route4 && (
        <Link
          className="green-btn text-center py-2 px-4 rounded-lg shadow-md transition hover:bg-green-700"
          to={`/dashboard/${route4}`}
        >
          {btn4}
        </Link>
      )}
    </div>
  );
};

export default AddProductHeader;
