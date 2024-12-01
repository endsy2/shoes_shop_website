import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-[black] min-h-screen w-full">
      <main>
        <Outlet />
      </main>
    </div>
  );
};


export default RootLayout;
