export const Button = ({ text, buttonClick }) => {
  return (
    <div>
      <button
        className="rounded-full px-4 py-2 h-16 w-full md:w-1/2 mt-5 shadow-2xl border-2 hover:bg-white"
        onClick={buttonClick}
      >
        {text}
      </button>
    </div>
  );
};
