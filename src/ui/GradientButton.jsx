function GradientButton({ text, children, xPosition }) {
  return (
    <button
      className={`${xPosition} -mt-5 block w-fit rounded-md bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-10 py-3 text-xl font-bold text-white hover:-translate-y-1 hover:transform`}
    >
      {text} {children}
    </button>
  );
}

export default GradientButton;
