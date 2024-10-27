import { Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";
import { SidebarMenuItem } from "../components";

export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-7">
      <nav className="relative hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl items-center">
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
          MathTutor<span className="text-indigo-500">.</span>
        </h1>
        {/* <img
          src="utzaclogo.png"
          alt="Logo institucional"
          className="my-4 w-32 h-32"
        /> */}
        <span className="text-l">El asistente para matemáticas</span>
        <div className="border-gray-700 border my-3" />
        {/* Opciones del menú */}
        {menuRoutes.map((option) => (
          <SidebarMenuItem key={option.to} {...option} />
        ))}
        <div className="absolute bottom-0 w-full flex items-center">
          <span className="text-xs ml-2">
            Derechos Reservados &copy; 2024 J.T.R.
          </span>
        </div>
      </nav>

      <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};
