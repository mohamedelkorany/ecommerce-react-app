import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function LayoutWithHeader() {
    return (
      <>
        <NavBar />
        <div className="container my-5">
          <Outlet />
        </div>
      </>
    );
  }