import { useAboutContext } from "../contexts/AboutContext";
import { Button } from "./Button";

export function About() {
  const { aboutFlag, setAboutFlag } = useAboutContext();

  function onBackClick() {
    setAboutFlag(!aboutFlag);
  }
  return (
    <div>
      <div className="inline-block w-1/2 h-1/2">
        <h3 className="mt-10 text-3xl md:text-4xl">About the application:</h3>
        <p className="mt-10 text-1xl md:text-1xl text-left">Despite the fact the smartphone as we know it isn't even old enough to legally drink, the technology has drastically changed the entire world. As Samuel James has rightly pointed out, "As the internet has escaped its physical tethers and become a mobile, ambient habitat, it has altered not only our sense of self but our sense of truth." We no longer get on the Internet; instead, we are immersed in it.</p>
        <p className="mt-5 text-left">While this application was a way for me to take what I've been learning about React and create something, I also wanted to highlight our new reality: the amount of time we are potentially losing each week, month, and year to these glowing boxes.</p>
        <p className="mt-5 text-left">Recommended resources:</p>
        <Button text="Back" buttonClick={onBackClick}></Button>
      </div>
    </div>
  );
}
