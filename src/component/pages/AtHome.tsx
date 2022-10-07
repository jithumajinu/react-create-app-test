import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export const AtHome = () => {

  const { currentUser } = useAuth();

  console.log('%c: currentUser', 'color:yellow', currentUser );

  return (
    <div className="at-home">
       
      home page 
      See to experience
information Technology
Content is the king in today's world. It drives interactions in a customer-oriented
market with relevance and consistency. That said, content without context is devoid
of purpose and means nothing. This is where C2Xi enters the picture.

See to experience
information Technology
Content is the king in today's world. It drives interactions in a customer-oriented
market with relevance and consistency. That said, content without context is devoid
of purpose and means nothing. This is where C2Xi enters the picture.

See to experience
information Technology
Content is the king in today's world. It drives interactions in a customer-oriented
market with relevance and consistency. That said, content without context is devoid
of purpose and means nothing. This is where C2Xi enters the picture.

See to experience
information Technology
Content is the king in today's world. It drives interactions in a customer-oriented
market with relevance and consistency. That said, content without context is devoid
of purpose and means nothing. This is where C2Xi enters the picture.
    </div>
  );
};

export default AtHome;
