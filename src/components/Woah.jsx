import { useCalculateContext } from "../contexts/CalculateContext";
import { useHoursContext } from "../contexts/HoursContext";
import { Button } from "./Button";
import { isMobile } from "react-device-detect";

export const Woah = () => {
  const { woahFlag, setWoahFlag } = useCalculateContext();
  const { hours } = useHoursContext();

  const device = isMobile ? "phone" : "computer";

  function onRetryClick() {
    setWoahFlag(!woahFlag);
  }

  if (hours === 0) {
    return (
      <div className="inline-block w-1/2">
        <h3 className="text-3xl mt-10 justify-center">
          I'm pretty sure it isn't possible to have negative screen time,
          especially since you're using this on your {device}.
        </h3>
        <Button text="Try again?" buttonClick={onRetryClick} />
      </div>
    );
  } else {
    return (
      <div className="inline-block w-1/2">
        <h3 className="text-3xl mt-10">
          Woah, there's no way you spend that much time on a screen.
        </h3>
        <h3 className="text-3xl mt-10">...right?</h3>
        <Button text="Try again?" buttonClick={onRetryClick} />
      </div>
    );
  }
};
