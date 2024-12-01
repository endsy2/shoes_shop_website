import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";

const RootLayout = () => {
  return (
    <div className="bg-[black] min-h-screen w-full">
      <nav>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default RootLayout;
