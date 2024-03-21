import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CategoriesDropdown from "../NavbarCategories/CategoriesDropdown";
import { useStatuses } from "../../reactQuery/useStatuses";
import StatusPill from "../../ui/StatusPill";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllStatuses } from "../../redux/activeStatusesSlice";

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const { statuses } = useStatuses();

  const dispatch = useDispatch();

  const categoryLabel = searchParams?.get("category")
    ? searchParams.get("category")
    : "Select Category";

  return (
    <>
      <hr></hr>
      <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-x-10 ">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase ">Category</p>
          <div
            role="button"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="unselectable relative flex w-fit items-center justify-between gap-x-20 rounded-md bg-white px-5 py-3 text-stone-500 hover:cursor-pointer"
          >
            <p>{categoryLabel}</p>
            <FontAwesomeIcon icon={faChevronDown} />
            {showCategoryDropdown && <CategoriesDropdown />}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold uppercase ">Statuses</p>
          <div className="flex w-fit items-center gap-x-1 rounded-full border bg-white p-[0.35rem] text-stone-500 shadow-md">
            {statuses?.map((status) => (
              <StatusPill key={status} status={status} />
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            searchParams.delete("name");
            searchParams.delete("status");
            searchParams.delete("category");
            dispatch(removeAllStatuses());
            setSearchParams(searchParams);
          }}
          className="ms-auto mt-6 transform rounded-full bg-white px-5 py-3 font-semibold hover:scale-105"
        >
          <FontAwesomeIcon icon={faXmark} className="me-2" /> Clear Filters
        </button>
      </div>
    </>
  );
}

export default Filters;
