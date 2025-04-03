import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Auto-login without password check
    navigate("/dashboard");
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="font-Roboto font-bold text-center text-primary text-5xl block">
        Login
      </h2>
      <div className="flex flex-col align-center items-center p-20">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label htmlFor="email" className="text-login pr-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-lg w-full rounded-lg h-12 p-4 border-2 border-primary mb-4"
          />

          {/* Kept password field but made it non-functional */}
          <label htmlFor="password" className="text-login">
            Password (ignored)
          </label>
          <input
            type="password"
            id="password"
            placeholder="Any input accepted"
            className="text-lg w-full rounded-lg h-12 p-4 border-2 border-primary mb-6"
            disabled  // Optional: remove this to let users type (but it won't be checked)
          />

          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="font-bold px-8 py-4 rounded-xl bg-primary text-white hover:bg-green-500"
            >
              Login
            </button>
            <Link
              to="/register"
              className="font-bold px-8 py-4 rounded-xl bg-red-600 text-black hover:text-gray-700 hover:bg-red-500"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;