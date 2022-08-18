import MyImage from "./img/my-image";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="flex items-center justify-center max-w-screen-lg mx-auto h-screen gap-12 w-full pt-12">
      <div className="flex-none md:h-60 lg:h-96 md:w-60 lg:w-96">
        <MyImage />
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
