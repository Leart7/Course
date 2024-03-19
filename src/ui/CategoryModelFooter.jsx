import ModalCancelCloser from "./ModalCancelCloser";

function CategoryModelFooter({ setClickedModal, btnText }) {
  return (
    <div className="py-5">
      <hr></hr>
      <div className="mt-4 flex items-center justify-end gap-x-4 px-5">
        <ModalCancelCloser setClickedModal={setClickedModal} />
        <button
          type="submit"
          className="h-11 rounded-md bg-green-600 px-8  py-2 font-medium text-white hover:bg-green-700"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default CategoryModelFooter;
