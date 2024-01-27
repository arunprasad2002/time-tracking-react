import { useEffect, useState } from "react";
import Button from "../UI/Button";
import { useGlobalContext } from "../../context/context";

export default function App() {
  const { dispatch } = useGlobalContext();
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });

  const [isStart, setIstart] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isSave, setIsSvae] = useState(true);
  const [statrtTimer, setStartTimer] = useState(false);

  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    if (statrtTimer) {
      setIsPaused(false);
      setIsSvae(false);
    }
  }, [statrtTimer]);

  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };
      // update sec and see if we need to increase min
      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }
      // min has increased in *newTime* by now if it was updated, see if it has crossed 59
      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }

      return newTime;
    });
  };

  const pauseOrResume = () => {
    if (!intervalId) {
      let id = setInterval(updateTimer, 1000);
      setIntervalId(id);
      setIstart(true);
      setIsPaused(false); // Set isPaused to false when starting the timer
      setIsSvae(false);
    } else {
      clearInterval(intervalId);
      setIntervalId("");
      setIsPaused(true); // Set isPaused to true when pausing the timer
      setIstart(false);
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setTime({
      sec: 0,
      min: 0,
      hr: 0,
    });
  };

  const showModal = () => {
    dispatch({ type: "SHOW_MODAL_SAVE", payload: time });
  };

  return (
    <div className="App">
      <div className="flex justify-center items-center text-xl font-bold">
        <div>HH : MM : SS</div>
      </div>

      <div className="flex justify-center items-center text-xl font-bold">
        <div>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${
          time.min
        } : ${time.sec < 10 ? 0 : ""}${time.sec}`}</div>
      </div>

      <div className="mt-2 flex justify-center items-center space-x-2">
        <Button onClickHandelar={pauseOrResume} disabled={isStart}>
          Start
        </Button>
        <Button onClickHandelar={pauseOrResume} disabled={isPaused}>
          Pause
        </Button>
        <Button onClickHandelar={showModal} disabled={isSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
