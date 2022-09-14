import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export const AtHome = () => {

  const { currentUser } = useAuth();

  console.log('%c: currentUser', 'color:yellow', currentUser );

  return (
    <div className="at-home">
       
      home page
    </div>
  );
};

export default AtHome;
