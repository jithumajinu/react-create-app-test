import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/auth";



const Login: React.FC = () => {
  let navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const { signIn } = useAuth();

  async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setSubmitted(true);
    await signIn();
    navigate('/dashboard');
    setSubmitted(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 10 }}>Login</h1>

      <form onSubmit={(event) => handleSignIn(event)}>
        <button type="submit" className="btn btn-dark">
          {!submitted ? `Sign In` : "fav"}
        </button>
      </form>
    </div>
  );
};

export default Login;

// export const Login = () => {

 

 
  
//   return (
 
//     <div className="at-home">
//       login
//     </div>
 
//   );
// };

// export default Login;
