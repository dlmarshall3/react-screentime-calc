import { useHoursContext } from "../contexts/HoursContext";
import { useCalculateContext } from "../contexts/CalculateContext";
import { Button } from "./Button";

export const Results = () => {
  const { hours, setHours } = useHoursContext();
  const { _, setCalculateFlag } = useCalculateContext();

  function onBackClick() {
    setCalculateFlag(false);
    setHours(0);
  }

  return (
    <div className="">
      <div className="weekly mt-10">
        <h3 className="text-3xl">Per week:</h3>
        <h3>
          {hours * 7} hours or {((hours * 7) / 24).toFixed(1)} days
        </h3>
      </div>
      <div className="monthly mt-10">
        <h3 className="text-3xl">Per month:</h3>
        <h3>
          {hours * 30} hours or {((hours * 30) / 24).toFixed(1)} days
        </h3>
      </div>
      <div className="yearly mt-10">
        <h3 className="text-3xl">Per year:</h3>
        <h3>
          {hours * 365} hours or {((hours * 365) / 24).toFixed(1)} days
        </h3>
      </div>
      <div className="three-years mt-10">
        <h3 className="text-3xl">Three years:</h3>
        <h3>
          {hours * 365 * 3} hours or {((hours * 365 * 3) / 24).toFixed(1)} days
        </h3>
      </div>
      <Button buttonClick={onBackClick} text="Back" />
    </div>
  );
};
