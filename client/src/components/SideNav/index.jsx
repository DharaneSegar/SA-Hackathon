import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import sideNavigation from "../../data/sideNavigation.json";

const SideNav = () => {
  const [activePage, setActivePage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    setActivePage(location);
  }, [location]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div
        className={`h-screen bg-gradient-to-t from-cyan-300 to-cyan-800 w-fit sticky top-0 left-0 z-50 ${
          isOpen ? "absolute md:fixed" : ""
        }`}
      >
        <div className="px-[20px] h-[64px] uppercase text-white font-bold text-xl w-full flex justify-center items-center gap-[20px]">
          <img
            src="https://www.wcd.com.my/wp-content/uploads/2023/01/hyatt-logo.png"
            alt="Logo"
            className="w-auto h-10" // Adjust the size as needed
          />
          <div className="text-2xl flex md:hidden hover:text-cyan-900">
            <button
              onClick={() => {
                handleMenu();
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <div className="grid">
          {sideNavigation &&
          sideNavigation.data &&
          sideNavigation.data.length ? (
            sideNavigation.data.map((item) => (
              <Link key={item.link} to={item.link}>
                <div
                  className={`px-[20px] py-[10px] w-full flex items-center gap-[10px] hover:bg-black hover:bg-opacity-20 ${
                    item.link == activePage ? "bg-black bg-opacity-40" : ""
                  }`}
                >
                  <div className="text-white w-[24px]">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div
                    className={`text-white md:flex ${
                      isOpen ? "flex" : "hidden"
                    }`}
                  >
                    {item.name}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default SideNav;
