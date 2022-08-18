import { NavLink } from "react-router-dom";
import SwitchModeBtn from "./switch-mode-btn";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const routes = [
    {
      title: "About Me",
      route: "/",
    },
    {
      title: "My Skills",
      route: "skills",
    },
    {
      title: "Work Experience",
      route: "work-experience",
    },
  ];

  const navigate = useNavigate();
  // for (let i = 0; i < routes.length; i++) {
  //   console.log(i);
    
  //   setTimeout(() => {
  //     navigate(routes[i].route, {replace: true})
  //   }, 3000);
    
  //}
  // setTimeout(() => {
  // routes.forEach(element => {
  //     console.log(element);
  //     navigate(element.route, {replace: true})
  //   });
  // }, 3000);

  const [currentRoute, setCurrentRoute] = useState('/')
  const loopRoutes = () => {
    const currentIndex = routes.findIndex(x => x.route === currentRoute)
    const nextRoute = routes.length === currentIndex + 1 ? routes[0].route : routes[currentIndex + 1].route;
    navigate(nextRoute, {replace: true})
    setCurrentRoute(nextRoute);
  }
  setTimeout(()=> {
    loopRoutes()
  }, 5000)
  // useEffect(()=> {

  // })

  return (
    <div className="fixed inset-x-0 bg-white dark:dark w-full">
      <div className="flex flex-wrap justify-between container mx-auto py-11 w-full">
        <div className="text-blue-600 dark:text-white text-3xl">
          Kyrillos Mamdoh
        </div>
        <ul className="flex">
          {routes.map((route, i) => {
            return (
              <li key={i} className="px-5 font-bold">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "text-blue-600 dark:text-white"
                      : "text-blue-300 dark:text-neutral-400"
                  }
                  to={route.route}
                >
                  {route.title}
                </NavLink>
              </li>
            );
          })}
          <li>
            <SwitchModeBtn />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
