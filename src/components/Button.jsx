export const Button = ({ text, buttonClick }) => {
  return (
    <div>
      <button
        className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 rounded-full px-4 py-2 h-16 w-3/4 md:w-1/2 mt-10 shadow-2xl border-2 hover:bg-white"
        onClick={buttonClick}
      >
        {text}
      </button>
    </div>
  );
};
