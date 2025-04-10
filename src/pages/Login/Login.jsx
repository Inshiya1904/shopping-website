import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/products");
        
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    // <div className="login-page">
    //   <div className="login-container">
    //   <h2>Login</h2>
    //   <form  onSubmit={handleLogin}>
    //     <input
    //       type="text"
    //       placeholder="username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //     {error && <p style={{ color: "red" }}>{error}</p>}
    //     <button type="submit">Login</button>
    //   </form>
    //   </div>
    // </div>
    <div className='login-popup'>
      <form action="" onSubmit={handleLogin}
       className="login-popup-container">
        <div className="login-pop-up-title">
          <h2>Login</h2>
        </div>
        <div className="login-popup-inputs">
       
          <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           {error && <p style={{ color: "red" }}>{error}</p>}

          </div>
        <button>Login</button>
       
      </form>
    </div>
  );
}
