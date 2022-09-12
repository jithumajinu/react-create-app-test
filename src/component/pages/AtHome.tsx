import { Link } from "react-router-dom";

export const AtHome = () => {
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
      home page
    </div>
  );
};

export default AtHome;
