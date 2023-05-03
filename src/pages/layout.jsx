import { GlassPane } from "../components/GlassPane";
import { Button } from "../components/Button";
import { useOptionsContext } from "../contexts/OptionsContext";
import { OptionsLayout } from "../components/OptionsLayout";

export default function ApplicationLayout() {
  const {
    basicFlag,
    setBasicFlag,
    advancedFlag,
    setAdvancedFlag,
    optionSelected,
    setOptionSelected,
  } = useOptionsContext();

  function handleButtonClick(buttonName) {
    if(buttonName === 'basic'){
      setBasicFlag(true);
      setAdvancedFlag(false);
      setOptionSelected(true);
    } else if (buttonName === 'advanced') {
      setBasicFlag(false);
      setAdvancedFlag(true);
      setOptionSelected(true);
    }
  }

  return (
    <div className="h-screen w-screen p-6">
      <GlassPane className="w-full h-full flex items-center justify-center">
        <div className="p-4 w-3/4 h-3/4 text-center">
          <h1 className="text-4xl">Screentime Calculator</h1>
          {!optionSelected && (
            <div>
              <Button
                text="Basic Options"
                buttonClick={() => handleButtonClick('basic')}
              ></Button>
              <Button
                text="Advanced Options"
                buttonClick={() => handleButtonClick('advanced')}
              ></Button>
            </div>
          )}
          <OptionsLayout />
        </div>
      </GlassPane>
    </div>
  );
}
