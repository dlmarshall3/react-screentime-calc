import { Button } from "./Button";
import { useHoursContext } from "../contexts/HoursContext";

export const BasicOptions = () => {
  const { perDayHours, setHoursPerDay } = useHoursContext();

  return (
    <div>
      <div className="">
        <h2 className="text-2xl">Hours per day:</h2>
        <h2 className="text-2xl">{perDayHours}</h2>
        <h2 className="text-4xl">
          <span onClick={()=>setHoursPerDay(perDayHours + 1)}>+</span> <span onClick={()=>setHoursPerDay(perDayHours - 1)}>-</span>
        </h2>
        <Button text="Calculate"></Button>
      </div>
    </div>
  );
};
