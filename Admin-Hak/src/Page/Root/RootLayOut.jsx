import { Outlet } from "react-router-dom";

const RootLayOut = () => {
  return (
    <div>
      <h1>Root Layout</h1>
      <Outlet /> {/* This renders nested routes inside RootLayOut */}
    </div>
  );
};

export default RootLayOut;
