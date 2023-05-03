import { IncrementButton } from "./IncrementButton";
import { Button } from "./Button";
import { useHoursContext } from "../contexts/HoursContext";
import { useCalculateContext } from "../contexts/CalculateContext";

export const OptionsLayout = () => {
  const { hours, setHours } = useHoursContext();
  const { calculateFlag, setCalculateFlag, woahFlag, setWoahFlag } =
    useCalculateContext();

  function onHoursIncrease() {
    if (hours === 23) {
      setWoahFlag(!woahFlag);
    } else {
      setHours(hours + 1);
    }
  }

  function onHoursDecrease() {
    if (hours === 0) {
      setWoahFlag(!woahFlag);
    } else {
      setHours(hours - 1);
    }
  }

  function onCalculateClick() {
    if (hours === 0) {
      return;
    }
    setCalculateFlag(!calculateFlag);
  }

  return (
    <div>
      <h3 className="mt-10 text-3xl md:text-4xl">Daily average:</h3>
      <h3 className="mt-10 text-3xl md:text-4xl">{hours}</h3>
      <div className="flex justify-around">
        <IncrementButton
          text="+"
          buttonClick={onHoursIncrease}
        ></IncrementButton>
        <IncrementButton
          text="-"
          buttonClick={onHoursDecrease}
        ></IncrementButton>
      </div>
      <div>
        <Button
          text="Calculate"
          buttonClick={onCalculateClick}
        ></Button>
      </div>
    </div>
  );
};
