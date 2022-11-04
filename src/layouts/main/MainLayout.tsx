import { FC } from "react";
import { Outlet } from "react-router-dom";

import MainHeader from "../header/MainHeader";
import MainFooter from "../footer/MainFooter";

const MainLayout: FC = () => {
  return (
    <div className="w-full">
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
