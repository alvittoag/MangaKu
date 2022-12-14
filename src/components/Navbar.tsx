import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navigation, setNavigation] = useState<number>(1);

  const handleNavigation = (id: number) => {
    setNavigation(id);
  };

  return (
    <div className="flex justify-between px-14 items-center py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl rounded-b-full fixed w-full z-50 top-0">
      <h1 className="text-3xl font-bold">MangaKu</h1>
      <div className="flex items-center gap-8 text-xl font-semibold cursor-pointer">
        <Link to="/">
          {navigation === 1 ? (
            <h5
              className="bg-slate-600 py-2 px-3 rounded-xl"
              onClick={() => handleNavigation(1)}
            >
              Home
            </h5>
          ) : (
            <h5 onClick={() => handleNavigation(1)}>Home</h5>
          )}
        </Link>

        <Link to="/recommended">
          {navigation === 2 ? (
            <h5
              className="bg-slate-600 py-2 px-3 rounded-xl"
              onClick={() => handleNavigation(2)}
            >
              Recommended
            </h5>
          ) : (
            <h5 onClick={() => handleNavigation(2)}>Recommended</h5>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
