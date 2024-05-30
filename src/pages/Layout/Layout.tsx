import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header.tsx";

const Layout: FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-400 font-roboto text-white dark:text-black pb-20">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
