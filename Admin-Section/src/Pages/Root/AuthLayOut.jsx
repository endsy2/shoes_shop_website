import { logo } from "../../Assets";
import { Outlet } from "react-router-dom";

const AuthLayOut = () => {
  return (
    <>
      <nav>
        <header>
          <img src={logo} alt="" className="p-16" />
        </header>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayOut;
