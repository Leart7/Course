import {
  faBars,
  faLayerGroup,
  faMagnifyingGlass,
  faShoppingCart,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import { useModalCloser } from "../hooks/useModalCloser";
import SearchingModal from "../features/Searching/SearchingModal";
import { useEffect, useRef, useState } from "react";
import CategoriesDropdown from "../features/NavbarCategories/CategoriesDropdown";
import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons";
import SearchInput from "../features/Searching/SearchInput";
import AdminDropdown from "../features/AdminsLinks/AdminDropdown";
import { useLocation } from "react-router";

const circleStyle = `flex h-10 w-10 items-center justify-center rounded-full bg-transparent hover:cursor-pointer hover:bg-stone-100 hover:text-blue-600 text-xl`;

function Navbar() {
  const [clickedModal, setClickedModal] = useModalCloser();
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const location = useLocation();

  const adminDropdownButton = useRef();

  useEffect(
    function () {
      function handleClickOutside(e) {
        if (
          adminDropdownButton.current &&
          !adminDropdownButton.current.contains(e.target)
        ) {
          setShowAdminDropdown(false);
        }
      }

      if (showAdminDropdown) {
        document.addEventListener("click", handleClickOutside);
      }

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    },
    [showAdminDropdown],
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-3 py-5 md:px-10">
        <div className="flex items-center gap-x-4">
          <Logo />
          <button
            onMouseEnter={() => setShowCategoriesDropdown(true)}
            onMouseLeave={() => setShowCategoriesDropdown(false)}
            className="relative hidden rounded-full bg-stone-100 px-5 py-3 lg:block"
          >
            <FontAwesomeIcon icon={faLayerGroup} className="text-lg" />{" "}
            Categories
            {showCategoriesDropdown && (
              <CategoriesDropdown
                setShowCategoriesDropdown={setShowCategoriesDropdown}
              />
            )}
          </button>
        </div>
        {location.pathname !== "/courses" &&
          location.pathname !== "/courses/admin" && <SearchInput />}
        <div className="flex items-center gap-x-4 text-lg md:gap-x-7">
          <div
            role="button"
            onClick={() => setClickedModal(true)}
            className={`${circleStyle} lg:hidden`}
          >
            {clickedModal ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} role="button" />
            )}
          </div>

          <div className={`${circleStyle} hidden lg:flex`}>
            <FontAwesomeIcon icon={faHeart} />
          </div>

          <div className={`${circleStyle}`}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>

          <div className={`${circleStyle} hidden lg:flex`}>
            <FontAwesomeIcon icon={faBell} />
          </div>

          <div
            ref={adminDropdownButton}
            onClick={() => setShowAdminDropdown(!showAdminDropdown)}
            className={`${circleStyle} relative`}
          >
            <FontAwesomeIcon icon={faUser} />
            {showAdminDropdown && <AdminDropdown />}
          </div>

          <div className={`${circleStyle} lg:hidden`}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
      {clickedModal && <SearchingModal setClickedModal={setClickedModal} />}
    </header>
  );
}

export default Navbar;
