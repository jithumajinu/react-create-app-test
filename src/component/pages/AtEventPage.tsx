import { Link } from "react-router-dom";

export const AtEventPage = () => {
  return (
    <div className="at-home">
      <Link key={1} to="/">
        {" "}
        home{" "}
      </Link>
      <Link key={2} to="/event">
        {" "}
        event{" "}
      </Link>
      , EventPage page
    </div>
  );
};

export default AtEventPage;
