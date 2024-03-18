import { useStatuses } from "../../reactQuery/useStatuses";
import GradientButton from "../../ui/GradientButton";
import StatusPill from "../../ui/StatusPill";
import CloseSearchModal from "./CloseSearchModal";

function SearchingModal({ setClickedModal }) {
  const { statuses } = useStatuses();

  return (
    <>
      <div className="animateOpenModal fixed inset-0 z-[500000] h-full w-full bg-white  shadow-2xl lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:overflow-y-auto lg:rounded-lg ">
        <CloseSearchModal setClickedModal={setClickedModal} />
        <div className="mt-24 flex flex-col gap-y-10">
          <div className="flex items-center justify-center gap-x-5">
            {statuses?.map((status) => (
              <StatusPill key={status} status={status} />
            ))}
          </div>
          <input
            className=" mx-auto block w-[93%] rounded-md border-2 px-5 py-3 text-lg font-medium text-gray-400 outline-blue-600"
            placeholder="What are you looking for?"
          />
          <GradientButton text="Search" xPosition="mx-auto" />
        </div>
      </div>
    </>
  );
}

export default SearchingModal;
