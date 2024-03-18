import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeActiveStatus,
  setActiveStatus as setActiveStatusRedux,
} from "../redux/activeStatusesSlice";

function StatusPill({ status }) {
  const [activeStatus, setActiveStatus] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      role="button"
      onClick={() => {
        setActiveStatus(!activeStatus);
        if (activeStatus) {
          dispatch(removeActiveStatus(status));
        } else {
          dispatch(setActiveStatusRedux(status));
        }
      }}
      className={`${activeStatus && "border-blue-600 bg-blue-600 text-white"} rounded-full border-2 px-5 py-2 font-medium text-black hover:cursor-pointer hover:bg-blue-600 hover:text-white`}
    >
      {status}
    </div>
  );
}

export default StatusPill;
