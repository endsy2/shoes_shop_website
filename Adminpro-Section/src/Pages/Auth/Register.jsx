import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../Fetch/FetchAPI";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigate();



  const handleSignUp = async (event) => {
    event.preventDefault();

    try {

      const response = await register({ username, email, password });
      const token = response.data.token;
      localStorage.setItem("Access-token", token);
      navigation("/dashboard");
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error(error);
    }
  };
  return (
    <section>
      <h2 className="font-AntonSC font-bold text-center text-primary text-5xl">
        Register
      </h2>
      <div className="flex flex-col align-center items-center p-20">
        <form onSubmit={handleSignUp}>
          <label className="text-login">UserName</label>
          <input
            type="text"
            placeholder="UserName"
            className="text-xl ml-[70px] rounded-lg w-[500px] h-12 p-4 border-2 border-primary"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />

          <label className="text-login">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="text-xl ml-[135px] rounded-lg w-[500px] h-12 p-4 border-2 border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />

          <label className="text-login">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="text-xl ml-[80px] rounded-lg w-[500px] h-12 p-4 border-2 border-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />

          <p className="text-red-500">{error}</p>

          <div className="flex justify-between w-[730px] mt-32">
            <Link
              to="/"
              className="font-bold px-24 py-4 rounded-xl bg-red-600 text-[black] hover:text-[#9B9797] hover:bg-red-500"
            >
              Login
            </Link>
            <button
              type="submit"
              className="font-bold px-24 py-4 rounded-xl bg-primary text-[white] hover:bg-green-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
