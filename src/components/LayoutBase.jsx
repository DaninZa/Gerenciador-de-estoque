import { Outlet } from "react-router-dom";
import Header from "./partials/Header";
import "./LayoutBase.css";

export default function LayoutBase() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
