import clsx from "clsx";

export const IncrementButton = ({ text, buttonClick, className }) => {
    return (
      <div>
        <button
          className={clsx("transition ease-in-out delay-0 hover:-translate-y-2 hover:scale-110 duration-300 border-2 w-16 h-16 mt-10 rounded-3xl hover:bg-white", className)}
          onClick={buttonClick}
        >
          {text}
        </button>
      </div>
    );
  };
  
