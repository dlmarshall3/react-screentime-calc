import { useOptionsContext } from "../contexts/OptionsContext";
import { BasicOptions } from "./BasicOptions";
import { AdvancedOptions } from "./AdvancedOptions";
import { Button } from "./Button";
import { useHoursContext } from "../contexts/HoursContext";

export const OptionsLayout = () => {
  const {
    basicFlag,
    setBasicFlag,
    advancedFlag,
    setAdvancedFlag,
    optionSelected,
    setOptionSelected,
  } = useOptionsContext();

  const { _, setHoursPerDay } = useHoursContext();

  function resetOptions() {
    setBasicFlag(false);
    setAdvancedFlag(false);
    setOptionSelected(false);
    setHoursPerDay(0);
  }

  let optionDisplay = undefined;
  if (basicFlag && !advancedFlag) {
    optionDisplay = <BasicOptions />;
  } else if (!basicFlag && advancedFlag) {
    optionDisplay = <AdvancedOptions />;
  }

  return (
    <div>
      <div>{optionDisplay}</div>
      {optionSelected && <Button buttonClick={resetOptions} text="Go back"></Button>}
    </div>
  );
};
