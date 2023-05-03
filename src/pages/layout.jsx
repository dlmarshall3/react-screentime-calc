import { GlassPane } from "../components/GlassPane";
import { useCalculateContext } from "../contexts/CalculateContext";
import { Results } from "../components/Results";
import { Woah } from "../components/Woah";
import { OptionsLayout } from "../components/OptionsLayout";

export default function ApplicationLayout() {
  const { calculateFlag, woahFlag } = useCalculateContext();

  return (
    <div className="h-screen w-screen p-6 min-w-fit min-h-fit">
      <GlassPane className="flex h-full justify-center text-clip">
        <div className="p-4 text-center">
          <h1 className="text-4xl md:text-5xl mt-10">Screentime Calculator</h1>
          {!calculateFlag && !woahFlag && (
            <div>
              <OptionsLayout />
            </div>
          )}

          {calculateFlag && (
            <div>
              <Results />
            </div>
          )}

          {woahFlag && <Woah />}
        </div>
      </GlassPane>
    </div>
  );
}
